import { useCallback, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useUser } from "../providers/UserProvider";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import { login, signup } from "../services/usersApiServices";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnackbarProvider";

const useUsers = () => {

    const [isLoading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const snack = useSnack();
    const navigate = useNavigate();
    const {user,setUser,setToken} = useUser();

    useAxios();

    const requestStatus = useCallback(
        (loading,errorMessage,user=null) => {
            setLoading(loading);           
            setError(errorMessage);
            setUser(user);
        },[setUser]);
    
        const handleLogin = useCallback(async (user) => {
            try{
                const token = await login(user);
                setTokenInLocalStorage(token);
                setToken(token);
                const userFromLocalStorage = getUser();
                requestStatus(false,null,userFromLocalStorage);
                snack("success","welcome back")
                navigate(ROUTES.CARDS);
            } catch(error) {
                requestStatus(false,error,null)
            }
        },[]) 

        const handleSignup = useCallback(
            async (userFromTheClient) => {
              try {
                const normalizedUser = normalizeUser(userFromTheClient);
                await signup(normalizedUser);
                await handleLogin({
                  email: userFromTheClient.email,
                  password: userFromTheClient.password,
                });
                snack("success","the registration completed")
              } catch (error) {
                requestStatus(false, error, null);
              }
            },
            [normalizeUser, handleLogin, requestStatus]
          );

        const handleLogout = useCallback(() => {
            removeToken();
            setUser(null);
        },[setUser])

        const value = useMemo(
            () => ({ isLoading, error, user}),
            [isLoading, error, user]
        );

        return{
            value,
            handleLogin,
            handleLogout,
            handleSignup
        };
    };

    export default useUsers;





