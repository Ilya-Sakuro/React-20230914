import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from './constants/mock';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ol>
    <li>
      <h2>{restaurants[0].name}</h2>
    </li>
    <h3>Menu:</h3>
    <ol>
      <li>
        <h4>{restaurants[0].menu[0].name}</h4>
        <ul>
          <li>Price: {restaurants[0].menu[0].price}</li>
          <li>
            Ingredients: {restaurants[0].menu[0].ingredients[0]} {restaurants[0].menu[0].ingredients[1]}
          </li>
        </ul>
      </li>
      <br />
      <li>
        <h4>{restaurants[0].menu[1].name}</h4>
        <ul>
          <li>Price: {restaurants[0].menu[1].price}</li>
          <li>Ingredients: {restaurants[0].menu[1].ingredients[0]}</li>
        </ul>
      </li>
      <br />
      <li>
        <h4>{restaurants[0].menu[2].name}</h4>
        <ul>
          <li>Price: {restaurants[0].menu[2].price}</li>
          <li>
            Ingredients: {restaurants[0].menu[2].ingredients[0]} {restaurants[0].menu[2].ingredients[1]}
          </li>
        </ul>
      </li>
    </ol>
    <h3>Reviews:</h3>
    <ol>
      <li>
        <h4>{restaurants[0].reviews[0].user}</h4>
        <ul>
          <li>{restaurants[0].reviews[0].text}</li>
          <li>{restaurants[0].reviews[0].rating}</li>
        </ul>
      </li>{' '}
      <li>
        <h4>{restaurants[0].reviews[1].user}</h4>
        <ul>
          <li>{restaurants[0].reviews[1].text}</li>
          <li>{restaurants[0].reviews[1].rating}</li>
        </ul>
      </li>
    </ol>
    <li>
      <h2>{restaurants[1].name}</h2>
    </li>
    <h3>Menu:</h3>
    <ol>
      <li>
        <h4>{restaurants[1].menu[0].name}</h4>
        <ul>
          <li>Price: {restaurants[1].menu[0].price}</li>
          <li>
            Ingredients: {restaurants[1].menu[1].ingredients[0]} {restaurants[1].menu[1].ingredients[1]}{' '}
            {restaurants[1].menu[1].ingredients[2]}
          </li>
        </ul>
      </li>
      <br />
      <li>
        <h4>{restaurants[1].menu[1].name}</h4>
        <ul>
          <li>Price: {restaurants[1].menu[1].price}</li>
          <li>
            Ingredients: {restaurants[1].menu[1].ingredients[0]} {restaurants[1].menu[1].ingredients[1]}{' '}
            {restaurants[1].menu[1].ingredients[2]} {restaurants[1].menu[1].ingredients[3]}
          </li>
        </ul>
      </li>
    </ol>
    <h3>Reviews:</h3>
    <ol>
      <li>
        <h4>{restaurants[1].reviews[0].user}</h4>
        <ul>
          <li>{restaurants[1].reviews[0].text}</li>
          <li>{restaurants[1].reviews[0].rating}</li>
        </ul>
      </li>
      <li>
        <h4>{restaurants[1].reviews[1].user}</h4>
        <ul>
          <li>{restaurants[1].reviews[1].text}</li>
          <li>{restaurants[1].reviews[1].rating}</li>
        </ul>
      </li>
      <li>
        <h4>{restaurants[1].reviews[2].user}</h4>
        <ul>
          <li>{restaurants[1].reviews[2].text}</li>
          <li>{restaurants[1].reviews[2].rating}</li>
        </ul>
      </li>
    </ol>
    <li>
      <h2>{restaurants[2].name}</h2>
    </li>
    <h3>Menu:</h3>
    <ol>
      <li>
        <h4>{restaurants[2].menu[0].name}</h4>
        <ul>
          <li>Price: {restaurants[2].menu[0].price}</li>
          <li>Ingredients: {restaurants[2].menu[0].ingredients[0]}</li>
        </ul>
      </li>
      <br />
      <li>
        <h4>{restaurants[2].menu[1].name}</h4>
        <ul>
          <li>Price: {restaurants[2].menu[1].price}</li>
          <li>
            Ingredients: {restaurants[2].menu[1].ingredients[0]} {restaurants[2].menu[1].ingredients[1]}
          </li>
        </ul>
      </li>
      <br />
      <li>
        <h4>{restaurants[2].menu[2].name}</h4>
        <ul>
          <li>Price: {restaurants[2].menu[2].price}</li>
          <li>Ingredients: {restaurants[2].menu[2].ingredients[0]}</li>
        </ul>
      </li>
    </ol>
    <h3>Reviews:</h3>
    <ol>
      <li>
        <h4>{restaurants[2].reviews[0].user}</h4>
        <ul>
          <li>{restaurants[2].reviews[0].text}</li>
          <li>{restaurants[2].reviews[0].rating}</li>
        </ul>
      </li>
    </ol>
    <li>
      <h2>{restaurants[3].name}</h2>
    </li>
    <h3>Menu:</h3>
    <ol>
      <li>
        <h4>{restaurants[3].menu[0].name}</h4>
        <ul>
          <li>Price: {restaurants[3].menu[0].price}</li>
          <li>Ingredients: {restaurants[3].menu[0].ingredients[0]}</li>
        </ul>
      </li>
      <br />
      <li>
        <h4>{restaurants[3].menu[1].name}</h4>
        <ul>
          <li>Price: {restaurants[3].menu[1].price}</li>
          <li>
            Ingredients: {restaurants[3].menu[1].ingredients[0]} {restaurants[3].menu[1].ingredients[1]}
          </li>
        </ul>
      </li>
    </ol>
    <h3>Reviews:</h3>
    <ol>
      <li>
        <h4>{restaurants[3].reviews[0].user}</h4>
        <ul>
          <li>{restaurants[3].reviews[0].text}</li>
          <li>{restaurants[3].reviews[0].rating}</li>
        </ul>
      </li>
      <li>
        <h4>{restaurants[3].reviews[1].user}</h4>
        <ul>
          <li>{restaurants[3].reviews[1].text}</li>
          <li>{restaurants[3].reviews[1].rating}</li>
        </ul>
      </li>
    </ol>
  </ol>
);
