import axios from 'axios'
import { userAgentFromString } from 'next/server'
import React from 'react'

function Produtos({produtos}){
    return(
        <div>
            {produtos.map((produto) => (
                <div>
                    <div className='titulo'>
                        {produto.title}
                    </div>
                    <div>
                        {produto.price}
                    </div>
                    <div>
                        <img src={produto.image}></img>
                    </div>
                </div>
            ))}
        </div>
        
    )
}
export async function getServerSideProps(context) {
    const response = await axios.get('https://fakestoreapi.com/products');
    const data = await response.data;
    return {
      props: {produtos:data}, // will be passed to the page component as props
    }
  }

  export default Produtos;