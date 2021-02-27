import React from 'react'
import styled  from 'styled-components'

// const Button = styled.button `
//     font-family:sans-serif;
//     font-size:1.3 rem;
//     border:none;
//     border-radius:5px;
//     padding:7px 10px;
//     background: red;
//     color:white;
//     &:hover{
//         background:blue
//     }

// `;
// const LearnReact = styled.a `
//     color:white;
//     font-size:36px;
//     text-decoration:none;
// `

function myBootstrap() {
    return (
        <div className="container-fluid">

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <   img class="d-block w-100" src="/ok.jpg" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/ok.jpg" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="/ok.jpg" alt="Third slide"/>
                    </div>
            </div>
        </div>
            <h2 className="title">Title</h2>
            {/* <Button>Create</Button> */}
            <div class="row gx-5">
                <div className="col-sm bg-primary p-3">1</div>
                <div className="col-sp-3 mb-2 bg-gradient-primary text-white p-3">2</div>
                <div className="col-sm">3</div>

            </div>
            <div class="row">
                <div className="col-sm">1</div>
                <div className="col-sm">2</div>

            </div>
            <div className="row">
                <div className="col-md-8">main</div>
                <div className="cold-md-4">navbar</div>
            </div>
         
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 border bg-light">Custom column padding</div>
                    </div>
                    <div class="col">
                    <   div class="p-3 border bg-light">Custom column padding</div>
                    </div>
                </div>
            </div>

            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>

            <div className="jumbotron container-fluid">
            
             <div className="lala text-light sm-mt-90%">
             <h1 class="h3 p-3 mb-2 bg-gradient-primary text-white"> Hello, world!</h1>
              
                <p className="p-3 mb-2 bg-gradient-primary text-white">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" role="button" href="#" >Learn more</a>
             </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                   <img src="/img.2.jpg" class="img-fluid"alt=""/>
                   <div p-sm-lg >
                     <p>  Hallo lalalala </p>
                   </div>
                </div>
            </div>

            <div className="container">
                <div  className="row gx-5 gy-5">
                <div className="col-sm-12 col-md-6">
                    <p>lalalalla</p>
                </div>
                <div className="col-sm-12 col-md-6">
                    <p>lalalalla</p>
                </div>
                </div>
            </div>

<div id="myCarousal" className="carousel slide" data-ride="carousel">
<   div className="carousel-inner">
        <div className="carousel-item active">
            <div className="container">
                        <h1> example headline</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam vero nisi eligendi maiores expedita illum fugiat deleniti itaque iste?</p>
                        <a href="#" className="btn btn-lg btn-primary"> Sign Up Today</a>
                    </div>
        </div>

        <div className="carousel-item">
                    <div className="container">
                        <h1> example headline</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam vero nisi eligendi maiores expedita illum fugiat deleniti itaque iste?</p>
                        <a href="#" className="btn btn-lg btn-primary"> Sign Up Today</a>
                    </div>

                </div>

        <div className="carousel-item">
                    <div className="container">
                        <img srce ="./ok.jpg"></img>
                        <h1> example headline</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam vero nisi eligendi maiores expedita illum fugiat deleniti itaque iste?</p>
                        <a href="#" className="btn btn-lg btn-primary"> Sign Up Today</a>
                    </div>

                </div>
    </div>



</div>

            <style jsx>
                {`
                    .carousal-item{
                        height:32rem;
                        background:#777;
                        color:white;
                        position:relative
                    }
                    .container{
                        position:absolute;
                        bottom:0;
                        left:0;
                        right:0;
                        padding-bottopm:50px;

                    }
                    .title{
                            color:red;
                        }
                    .trial{
                            padding:1rem;
                            border:2px solid #fff;
                            text-align:left;
                            width:50%
                        }
                    .jumbotron{
                            background-image: url("/bckground.jpg");
                            background-position:center;
                            background-repeat: no-repeat;
                            height:600px;
                            width:full;
                            background-size:cover;
                            position:relative
                        
                        }
                    .lala{
                        position:absolute;
                        top: 70%;

                        left:0%

                       
                   
                    

                        
                   
                `}

            </style>
        </div>
    )
}

export default myBootstrap
