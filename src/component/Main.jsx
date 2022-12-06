import React from 'react'

const Main = () => {
  return (
    <>
    
      <div class="container">
        <header>
          <h2>ISSUE, JUNE</h2>
          <h2><a style={{display:"inline"}} href="">NEWS</a></h2>
        </header>
        
        <section className="container__section">
          <h1>NEWSPAPER</h1>
        </section>

        <section className='container__mainhead mainhead--Second row flexSB '>
          <div className="section__news">
            <h2>LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING SAEPE!</h2>
            <h5>18 JUNE 2022</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam 
              ducimus iste at labore, recusandae enim consectetur facere sunt asperiores officia molestias,
               eveniet natus similique inventore aut laborum incidunt delectus aliquam.</p>
          </div>
          <div className="img"></div>
        </section>

        <section className='container__mainhead mainhead--Third row flexSB'>
          <div className="img"></div>
          <div className="section__news">
            <h2>LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING SAEPE!</h2>
            <h5>18 JUNE 2022</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus iste at labore, 
              recusandae enim consectetur facere sunt asperiores officia molestias, eveniet natus similique inventore.</p>
          </div>
        </section>

        
        <section className='container__mainhead mainhead--Fourth row flexSB'>
          <div className="section__news">
            <h2>YOUR TITLE HERE</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus iste at labore, 
              recusandae enim consectetur facere sunt asperiores officia molestias, eveniet natus similique inventore.</p>
          </div>
          <div className="section__news">
            <h2>YOUR TITLE HERE</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus iste at labore, 
              recusandae enim consectetur facere sunt asperiores officia molestias, eveniet natus similique inventore.</p>
          </div>
          <div className="section__news">
            <h2>YOUR TITLE HERE</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus iste at labore, 
              recusandae enim consectetur facere sunt asperiores officia molestias, eveniet natus similique inventore.</p>
          </div>
        </section>
      </div>

    </>
  )
}

export default Main