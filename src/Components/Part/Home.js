import React from 'react';

export let HomeHeader = () => {
    return(
        <div>
            <iframe src="https://coupa.ng/bBfnuj" width="100%" height="44" frameborder="0" scrolling="no"></iframe>
            
        </div>
    )
}

export let HomeArticle = ({
    materials,
    exchangeRate,
    prices,
    weights,
    enteredWeight,
    HandleOnChanging
}) => {

    return(
        <article>
            <div>
                <HomeEnteredWeightInput
                    exchangeRate={exchangeRate}
                    enteredWeight={enteredWeight}
                    HandleOnChanging={HandleOnChanging}
                />
            </div>
            <div>
                <iframe src="https://coupa.ng/bBfnuh" width="100%" height="75" frameborder="0" scrolling="no">
                </iframe>
            </div>
            <div>
                <HomeMaterials 
                    prices={prices}
                    weights={weights}
                    enteredWeight={enteredWeight}
                    materials={materials}
                />
            </div>

        </article>
    )
}

let HomeEnteredWeightInput = ({
    exchangeRate,
    enteredWeight,
    HandleOnChanging
}) => {
    
    return(
        <div className="m-5">

            <div className="text-center">
                <h4>현재 환율</h4>
                <h2>1$ = {exchangeRate}</h2>
            </div>
            <div>
                <iframe src="https://coupa.ng/bBfnum" width="100%" height="36" frameborder="0" scrolling="no"></iframe>
            </div>
            <input 
                type="text"
                name="enteredWeight"
                value={enteredWeight}
                onChange={HandleOnChanging}
                className="form-control"
                placeholder="무게를 입력하세요~"
            />
        </div>
    )
}

let HomeMaterials = ({
    materials,
    prices,
    enteredWeight
}) => {
    return(
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    {materials.map((material, index) => {
                        return(
                            <HomeMaterial
                                key={index}
                                material={material}
                                enteredWeight={enteredWeight}
                                price={prices[index]}
                            />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

let HomeMaterial = ({
    material,
    price,
    enteredWeight
}) => {
    return(
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
            <img 
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src={material.imageUrl}
                alt={material.name}
            />
            <div className="card-body">
                <h2>{material.name}</h2>
                <div>
                    <div className="border-bottom mt-2">
                        <small>
                            <p>{material.weight} (L or g) 기준</p>
                        </small>
                        <strong>
                            <p className="card-text">{material.price}원</p>
                        </strong>
                    </div>
                    <div className="mt-2">
                        <small>
                            <p>{enteredWeight} (L or g) 기준</p>
                        </small>
                        <strong>
                            {enteredWeight === ''
                                ?
                                (<p className="card-text text-success">값을 입력해주세요~</p>)
                                :
                                (material.name === '삼겹살' || material.name === "한우" || material.name === "호주산"
                                    ?
                                    (<p className="card-text">{(material.price / 100) * enteredWeight}</p>)
                                    :
                                    (<p className="card-text">{material.price * enteredWeight}</p>)
                                )
                            }
                        </strong>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>
    )
}