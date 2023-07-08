import { useCallback, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useUser } from "../providers/UserProvider";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import { editUser, getUserData, login, signup } from "../services/usersApiServices";
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
                if(userFromLocalStorage) navigate(ROUTES.CARDS);
            } catch(error) {
              snack("error","wrong user details, please try again")
              navigate(ROUTES.LOGIN)
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
            snack("success","See you soon...")
        },[setUser])

        const handleGetUser = useCallback(async () => {
          try{
            const user = await getUserData();
            return user;
          }
          catch(error){
            requestStatus(false,error,null);
          }
        },[requestStatus]);

        const handleUpdateUser = useCallback(
          async (user_id,userFromClient) => {
            try{
              await editUser(user_id,userFromClient);
              setLoading(false);
              navigate(ROUTES.CARDS);
              snack("success","the account has been edited")
            }
            catch(error){
              requestStatus(false,error,null);
            }
          },[navigate,requestStatus]);

        const value = useMemo(
            () => ({ isLoading, error, user}),
            [isLoading, error, user]
        );

        return{
            value,
            handleLogin,
            handleLogout,
            handleSignup,
            handleUpdateUser,
            handleGetUser,
            isLoading,
            error,
            user,
        };
    };

    export default useUsers;





