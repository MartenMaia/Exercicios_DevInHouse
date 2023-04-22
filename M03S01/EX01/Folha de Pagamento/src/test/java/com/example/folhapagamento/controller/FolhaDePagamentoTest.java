package com.example.folhapagamento.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

class FolhaDePagamentoTest {

    private FolhaDePagamento folha;

    @BeforeEach
    void setup(){
        folha = new FolhaDePagamento();
    }

    //Testes no Salario bruto
    @Test
    @DisplayName("Quando hÃ¡ gratificaÃ§Ã£o, deve ser somada ao salario")
    void calcularSalarioBruto_comGratificacao(){
        //given
        Double salarioBase = 1000.0;
        Double gratificacao = 200.0;
        String funcao = "dev";
        //when
        Double resultado = folha.calcularSalarioBruto(salarioBase, gratificacao, funcao);
        //then
        assertNotNull(resultado);
        assertEquals(1200.0,resultado);
    }

    @Test
    @DisplayName("Quando nÃ£o hÃ¡ gratificaÃ§Ã£o, nÃ£o deve ser somada ao salario")
    void calcularSalarioBruto_semGratificacao(){
        //given
        Double salarioBase = 1000.0;
        String funcao = "dev";
        //when
        Double resultado = folha.calcularSalarioBruto(salarioBase, null, funcao);
        //then
        assertNotNull(resultado);
        assertEquals(1000.0,resultado);
    }

    @Test
    @DisplayName("Quando a funcao for 'gerente', o salario deve ser multiplicado por 1,3")
    void calcularSalarioBruto_gerente_SemGratificao(){
        //given
        Double salarioBase = 1000.0;
        String funcao = "gerente";
        //when
        Double resultado = folha.calcularSalarioBruto(salarioBase, null, funcao);
        //then
        assertNotNull(resultado);
        assertEquals(1300.0,resultado);
    }

    @Test
    @DisplayName("Quando a funcao for 'gerente' e tiver gratificacao, primeiro deve ser somado a gratificao no salario e depoisfeita a multiplicacao por 1,3")
    void calcularSalarioBruto_gerente_comGratificao(){
        //given
        Double salarioBase = 1000.0;
        Double gratificacao = 1000.0;
        String funcao = "gerente";
        //when
        Double resultado = folha.calcularSalarioBruto(salarioBase, gratificacao, funcao);
        //then
        assertNotNull(resultado);
        assertEquals(2600.0,resultado);
    }

    //Testes Salario Liquido
    @Test
    @DisplayName("Salario sem descontos")
    void calcularSalarioLiquido_semDescontos(){
        //given
        Double salarioBase = 1000.0;
        ArrayList<Double> descontos = new ArrayList<>();
        //when
        Double resultado = folha.calcularSalarioLiquido(salarioBase, descontos);
        //then
        assertNotNull(resultado);
        assertEquals(1000.0,resultado);
    }

    @Test
    @DisplayName("Salario com descontos")
    void calcularSalarioLiquido_comDescontos(){
        //given
        Double salarioBase = 1000.0;
        ArrayList<Double> descontos = new ArrayList<>();
        descontos.add(200.0);
        descontos.add(500.0);
        //when
        Double resultado = folha.calcularSalarioLiquido(salarioBase, descontos);
        //then
        assertNotNull(resultado);
        assertEquals(300.0,resultado);
    }

    @Test
    @DisplayName("Salario com descontos maiores que o salario")
    void calcularSalarioLiquido_comDescontosSuperiorOuIguaisAoSalario(){
        //given
        Double salarioBase = 1000.0;
        ArrayList<Double> descontos = new ArrayList<>();
        descontos.add(500.0);
        descontos.add(600.0);
        //when
        //then
        assertThrows(IllegalStateException.class, () -> folha.calcularSalarioLiquido(salarioBase, descontos));
    }


}