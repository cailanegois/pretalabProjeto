import concedorAumento from "js/funcoes";
import {it, describe, expect, test} from 'vitest'

test("deve calcular o aumento de salario", () =>{

})

describe("concederAumento", ()=>{
   
    it("deve calcular o aumento da porcentagem de um dev jr corretamente", ()=>{
//escrever teste aqui
     const salario  = concedorAumento("dev junior", 1000)
     expect(salario).toBe(1200)
    });

    it("deve calcular o aumento da porcentagem de um dev pleno corretamente", ()=>{
        const salario  = concedorAumento("dev pleno", 1000)
        expect(salario).toBe(1120)
    }); 
    it("deve calcular o aumento da porcentagem de um dev senior corretamente", ()=>{
        const salario  = concedorAumento("dev senior", 1000)
        expect(salario).toBe(1050)
    }); 
    it("deve calcular o aumento de funcionários que não sejam devs", ()=>{
        const salario  = concedorAumento("analista de dados", 1200)
        expect(salario).toBe(1200)
    }      
    ); 

})