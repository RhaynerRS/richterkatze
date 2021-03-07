
function Home(){
    return(
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            
            <title>Richterkatze Studios</title>
            <script src="https://kit.fontawesome.com/82464d366f.js" crossorigin="anonymous"></script>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            <style >{`*{
    margin: 0;
    padding: 0;
    font-size: 100%;
    box-sizing: border-box;
    font-family: 'Anton', sans-serif;
}
nav, ul, li{
    list-style: none;
}
a{text-decoration: none; cursor: pointer; opacity: 0.9;}
a:hover{opacity: 1;}

/*header*/
header{ width: 100%; position:absolute; top:0;left: 0; display: flex;justify-content: space-between;align-items: center;padding: 20px 50px ;background-color: #fff;
position: sticky;z-index: 100000; }
header img{width: 300px;}
header nav{display: flex;}
header li a{color: #ff847c;}
header li{margin: 0px 15px;}
header li:first-child{margin-left:0 ;}
header li:last-child{margin-right:0 ;}
@media(max-width: 700px){
    header{
        flex-direction: column;
    }
}

/*HERO*/
.hero{background-image: url(https://i.imgur.com/VzKC60Q.png);background-size: cover;background-color:#2d304b; min-height: 85vh;color: #fff;display: flex;justify-content: center;align-items: center;
flex-direction: column;text-align: center;}
.hero h1{font-size: 3.2rem;margin-bottom: 15px;}
.hero h3{font-size: 2rem;margin-bottom: 15px;}
.hero .btn{background-color: #fff;border-radius: 4px;color: #ff847c;padding: 20px 50px;text-transform: uppercase;margin-bottom: 130px;}
@media(max-width: 700px){
    .hero h1{
        font-size: 2.5rem;
    }
    .hero h3{
        font-size: 1.5rem;
    }
}
/*jogos*/
.jogos{
    display: flex; flex-direction: column;align-items: center; padding: 100px 50px;
}
.jogos h3{font-size: 2rem; margin-bottom: 35px; color: #2d304b;}
.jogos p {max-width: 800px; margin-bottom: 35px;text-align: center;color: #2d304b;}
.jogos hr{
    width: 200px; height: 2px;
    background-color:#ff847c ;
    margin-bottom: 70px;
    border:none;
}
.jogos .grid{width: 100%; display: flex; flex-wrap: wrap;}
.jogos .grid li{height: 350px; padding: 20px; border-radius: 4px; background-clip: content-box;
background-size:cover ; background-position: center;cursor: pointer;
transition: all linear .6s;}
.jogos .grid li:hover{opacity: 0.75;}
.jogos .grid li.small{flex-basis: 40%;}
.jogos .grid li.large{flex-basis: 60%;}
@media(max-width: 700px){
    .jogos .grid li.small{flex-basis: 100%; }
    .jogos .grid li.large{flex-basis: 100%;}
    

}
/*footer*/
footer{
    display: flex; flex-direction: column; background-color:#2d304b ; padding: 50px 0px; align-items: center;
}
footer ul{display: flex; margin-bottom: 25px;}
footer ul li{margin-right: 10px;}
footer ul li:last-child{margin-right: 0px;}
footer ul li a{color: #ff847c;font-size: 2rem;}
footer p{color:#ff847c;}
`}</style>
        </head>
        <body>
        <header>
            <a href="https://imgur.com/o4y8CZl"><img src="https://i.imgur.com/o4y8CZl.png" title="source: imgur.com" /></a>
            <nav>
                <li><a href="">Home</a></li>
                <li><a href="">Sobre</a></li>
                <li><a href="https://gamejolt.com/@RichterkatzeStudios" target="_blank">Gamejolt</a></li>
                <li><a href="">Contato</a></li>
            </nav>
            
        </header>
        <section class="hero">
            <h1>RICHTERKATZE STUDIOS</h1>
            <a class="btn" href="">Saiba mais</a>
        </section>
        
        <footer>
            <ul>
                <li><a href="https://www.facebook.com/RHAYNER.R.SOUZA/" target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/RhaynerRossman" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/rhaynerrs/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://br.pinterest.com/jogossouza/_saved/" target="_blank"><i class="fab fa-pinterest"></i></a></li>
            </ul>
            <p>todos os direitos reservados - RichterkatzeStudios 2021</p>
        </footer>
        </body>
        </html>)

}

export default Home
