import React, { Component } from "react";

// import '../../../styles/conversor.css';

export default class Conversor extends Component {

    constructor(props){
        super(props);

        this.state = { //Variáveis que irão receber um valor
            moedaA_valor: "", //Moeda a ser convertida
            moedaB_valor: 0, //Valor convertido encontrado
        }

        this.converter = this.converter.bind(this); //Passando a propria classe para dentro da função
    }

    converter(){

        let cotacao = 0.0;
        let condicao = this.props.chave;
        console.log(condicao);
        switch (condicao){
            case 'usd_brl':
                cotacao = 5.14;
                break;
            case 'usd_eu':
                cotacao = 2;
                break;
            default:
                cotacao = 1;
        }
        let moedaB_valor_definido = (parseFloat(this.state.moedaA_valor * cotacao)).toFixed(2)
        this.setState({moedaB_valor: moedaB_valor_definido});

        


        // let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        // let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=y`;
        // fetch(url).then(res => {
        //     return res.jason()
        // }).then(json => {
        //     let cotacao = json[de_para].val;
        //     let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao)).toFixed(2)
        //     this.setState({moedaB_valor})
        // })
    }

    render(){
        return (
            <div className="conversor">

                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>

                <input type="text"
                    onChange={(event) => {
                        this.setState({ moedaA_valor: event.target.value });
                    }}
                />

                <input type="button" value="Converter" onClick={this.converter} />

                <h2>{this.state.moedaB_valor}</h2>
            </div>       
        );
    }
}