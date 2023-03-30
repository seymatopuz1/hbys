import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import logo from '../assets/derun.jpg';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppContext } from '../providers/AppProvider';


const StyledHeader = styled.div `
    height: 8vh;
    background-color:  #465775;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;

    .logo-container {
      flex:0.5;
      
      img{
        height: 8.5vh;
      }
    }

    .menu-container{
      flex:1;
    }
    
    nav{
      display:flex;
      justify-content: space-evenly;
      align-items: center;
      
    }

    ul{
      list-style:none;
    }
    
    ul a{
      float: left;
      color: #fff;
      text-decoration: none;
    }

    ul a:hover{
      opacity: 0.7;
    }

    ul a:not(:first-child) {
      margin-left: 20px;

    }
    button{
      margin-left:30px;
      background-color: #BEE5BF;
      padding: 5px 20px;
      border:none;
      curser: pointer;
    }
`;




export const Header = () => {
  const {state,dispatch} =useContext(AppContext);
  const [user, setUser] = useLocalStorage('user');

  const handleLogin = useCallback(()=> {
    setUser('seyma');
  }, [setUser])

    return (
   <StyledHeader>
    <div className='logo-container'  >
      <img src={logo} alt="logo" />
    </div>
    <nav className='menu-conatiner' >
      <ul>
        <Link to="/">Anasayfa</Link>
        <Link to="/idariHakedis">İdari Hakediş</Link>
        <Link to="/setBakim">Set Bakım İşlemleri</Link>
        <Link to="/setimNerede">Setim Nerede?</Link>
        <Link to="/private">Yetki Sınırı Alanı</Link>
      </ul>
      {state.loggedIn ? (
         <button onClick={()=>dispatch({ type : "logout"})}>
        Çıkış - {state.user}
      </button>
      ): (
      <button onClick={()=>dispatch({ type : "login", payload: "seyma"})}>
        Giriş
      </button>
      )}
    </nav>
   </StyledHeader>
  )
}
