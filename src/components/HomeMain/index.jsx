import React, { useState } from "react";
import Depoimento from "../Depoimento";
import "./HomeMain.css";

//importando imagens
import imgA from "../../assets/dente.jpg";
import imgB from "../../assets/dente.jpg";
import imgC from "../../assets/dente.jpg";
import imgD from "../../assets/dente.jpg";

//importando imagens dos clientes
import cliente1 from "../../assets/cliente001.jpg"
import cliente2 from "../../assets/cliente002.jpg"
import cliente3 from "../../assets/cliente003.jpg"

import aparelho from "../../assets/aparelho.jpg"

export default function HomeMain() {
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    const servicos = [
        { nome: 'Clareamento Dental', imagem: imgA },
        { nome: 'Implante Dentário', imagem: imgB },
        { nome: 'Limpeza Dental', imagem: imgC },
        { nome: 'Extração Dental', imagem: imgD }
    ];

    const depoimentos = [
        {
            nome: 'Maria Silva',
            foto: cliente1,
            texto: 'Estou muito satisfeito com o resultado do clareamento dental. Recomendo a todos.'
        },
        {
            nome: 'João Pedro',
            foto: cliente2,
            texto: 'Fiz um implante dentário e ficou perfeito. Obrigado a toda equipe.'
        },
        {
            nome: 'Ana Clara',
            foto: cliente3,
            texto: 'A limpeza dental foi ótima. Recomendo a todos.'
        }
    ]

    const handleClickContato = () => {
        setMostrarMensagem(true);
    }

    return (
        <div className="home-main">
            <section className="servicos">
                <h2>Nossos serviços</h2>
                <div className="servicos-grid">
                    {servicos.map((servico, i) => {
                        <div key={i} className="servico-item">
                            <img src={servico.imagem} alt={servico.imagem}/>
                            <p>{servico.imagem}</p>
                        </div>

                    })}
                </div>
            </section>

            <section className="aparelho">
                <h2>Por que usar aparelho ortodôntico</h2>
                <img src={aparelho} alt="" />
                <p>O aparelho ortodôtico corrige o posicionamento dos dentes, melhora a mordida, facilita a higiene
                    e promove um sorriso mais bonito e saudável.
                </p>
            </section>

            <section className="depoimentos">
                <h2>Depoimentos</h2>
                <div className="depoimentos-container">
                    {depoimentos.map((depoimento, i) => {
                        <Depoimento key={i} 
                        nome={depoimento.nome}
                        foto={depoimento.foto}
                        texto={depoimento.texto}
                        />
                    })}
                </div>
            </section>

            <button className="botao-contato" onClick={handleClickContato}>
                Entre em contato
            </button>

            {mostrarMensagem && (
                <div className="mensagem-contato">
                    <p>Entre em contato conosco pelo telefone (11) 99999-9999 ou pelo email dentista@gmail.com</p>
                </div>
            )}

        </div>
    );
}