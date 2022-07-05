import React from 'react'

const MenuCard = ({ menuData }) => {
    console.log(menuData);
    return (
        <>
            <section className="main-card-container">
                {
                    menuData.map((curElement) => {
                        return (
                            <>
                                <div className="card-container">
                                    <div className="card" >
                                        <div className="card-body" style={{ border: '2px solid green' }}>
                                            <span className="card-number  card-circle subtle">{curElement.id}</span>
                                            <span className="card-author  subtle" style={{ color: 'red' }}> {curElement.category} </span>
                                            <h4 className="card-title">{curElement.name}</h4>
                                            <span className="card-description subtle"> {curElement.description} </span>
                                            <div className="card-read">read</div>
                                        </div>
                                        <img src={curElement.image} alt="images" className="card-media" />
                                        <span className="card-tag subtle">Order Now</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}

export default MenuCard