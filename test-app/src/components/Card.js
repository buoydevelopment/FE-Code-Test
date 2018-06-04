import React from 'react';

const Card = (props) => {
  return props.vertical ?
    (
      <div className="card-vertical">
        <section>
          <img className="card-img-vertical" src={props.image} alt={props.name} />
        </section>
        <section>
          <ul>
            {props.ingredients && props.ingredients.map((ing, i) =>  {
              return (((props.measures[i] !== null && ing !== null) && (props.measures[i] !== '' && ing !== '')) ?
                <li key={i}>{`${props.measures[i]} - ${ing}`}</li>
              : null);
            })}
          </ul>
          <h4>How to prepare</h4>
          <p>{props.instructions}</p>
        </section>
      </div>
    )
  : (<div className="card" onClick={() => { props.onClick(props.id); }}>
      <section>
        <h2 className="card-title">{props.name}</h2>
        <ul>
          {props.ingredients && props.ingredients.filter((x, i) => (i <= 2))}
        </ul>
        {props.ingredients && props.ingredients.length > 2 &&
          <p>{`y ${props.ingredients.length} ingredientes mas`}</p>
        }
      </section>
      <section>
        <img className="card-img" src={props.img} alt={props.name} />
      </section>
    </div>
  );
};

export default Card;
