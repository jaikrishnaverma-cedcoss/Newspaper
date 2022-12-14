import React from 'react'

const Main = () => {
  return (
    <>
      <div class="container">
        <header>
          <h2>ISSUE, JUNE</h2>
          <h2><a style={{display:"inline"}} href="">NEWS</a></h2>
        </header>
        
        <section className="firstSection">
          <h1>NEWSPAPER</h1>
        </section>

        <section className='mainhead  mainhead--Second  row flexSB'>
          <div className="mainhead__news">
            <h2>LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING SAEPE!</h2>
            <h5>18 JUNE 2022</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam 
              ducimus iste at labore, recusandae enim consectetur facere sunt asperiores officia molestias,
               eveniet natus similique inventore aut laborum incidunt delectus aliquam.</p>
          </div>
          <div className="mainhead__img"></div>
        </section>

        <section className='mainhead mainhead--Third row flexSB'>
          <div className="mainhead__img"></div>
          <div className="mainhead__news">
            <h2>LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING SAEPE!</h2>
            <h5>18 JUNE 2022</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus iste at labore, 
              recusandae enim consectetur facere sunt asperiores officia molestias, eveniet natus similique inventore.</p>
          </div>
        </section>

        
        <section className='mainhead mainhead--Fourth row flexSB'>
          <div className="mainhead__news">
            <h2>YOUR TITLE HERE</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus iste at labore, 
              recusandae enim consectetur facere sunt asperiores officia molestias, eveniet natus similique inventore.</p>
          </div>
          <div className="mainhead__news">
            <h2>YOUR TITLE HERE</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus iste at labore, 
              recusandae enim consectetur facere sunt asperiores officia molestias, eveniet natus similique inventore.</p>
          </div>
          <div className="mainhead__news">
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