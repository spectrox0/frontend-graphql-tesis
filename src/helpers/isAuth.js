import React, {useState, useEffect} from 'react' ; 
import {CURRENT_USER} from './graphql/querys/querys'; 
import {useQuery} from '@apollo/react-hooks';
import AuthContext from './context/auth-context';
import Routes from './routes/Routes';

export default function IsAuth() {
    const [token, setToken] = useState(null);
    const [ username, setUsername] = useState(null);
    const [name, setName] = useState(null);
    const [userId, setUserId] = useState(null);
    const [urlImg, setUrlImg] = useState(null);
    const {data, loading ,error , refetch} = useQuery(CURRENT_USER);

    const login = (token, username ,name, _id, urlImg) => {
        setToken(token);
        setUsername(username);
        setName(name);
        setUserId(_id);
        setUrlImg(urlImg);
        localStorage.setItem("token", token);
       }
     
       const updateUser = () => {
        refetch();
       }
       const logout = () => {
        setToken(null);
        setUsername(null);
        setName(null);
        setUserId(null);
        setUrlImg(null);
       localStorage.removeItem("token");
   
     }

     useEffect(() => {
        const response = localStorage.getItem("token");
        if (response && !loading && data ) {
            if(!data.currentUser) {
             logout();
             return; 
            }
           console.log("recarga")
            setToken(response);
            setUsername(data.currentUser.username); 
            setName(data.currentUser.name);
            setUserId(data.currentUser._id);
            setUrlImg(data.currentUser.urlImg);
            console.log(data.currentUser.name)
        }
    
      }, [data,loading]);

      return (
        <AuthContext.Provider
        value={{ 
          token: token, 
          urlImg: urlImg,
           username: username,
          login: login,
          name: name,
          userId:userId,
          logout: logout , 
          updateUser: updateUser}}>


        {(!loading) &&  
           <Routes isAuth={token} />   
         
      }
           

        
      </AuthContext.Provider>
      )

}