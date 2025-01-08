from datetime import datetime
import os
import time
import json
from random import random
import requests
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

URL = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4392/dados'

# Função para extrair e salvar a taxa CDI
def extrair_e_salvar_taxa_cdi():
    try:
        response = requests.get(url=URL)
        response.raise_for_status()
    except requests.HTTPError as exc:
        print("Dado não encontrado, continuando.")
        dado = None
    except Exception as exc:
        print("Erro, parando a execução.")
        raise exc
    else:
        dado = json.loads(response.text)[-1]['valor']

    for _ in range(0, 10):
        data_e_hora = datetime.now()
        data = datetime.strftime(data_e_hora, '%Y/%m/%d')
        hora = datetime.strftime(data_e_hora, '%H:%M:%S')

        cdi = float(dado) + (random() - 0.5)

        # Verifica se o arquivo "taxa-cdi.csv" existe
        if not os.path.exists('./taxa-cdi.csv'):
            with open(file='./taxa-cdi.csv', mode='w', encoding='utf8') as fp:
                fp.write('data,hora,taxa\n')

        # Salva os dados no arquivo "taxa-cdi.csv"
        with open(file='./taxa-cdi.csv', mode='a', encoding='utf8') as fp:
            fp.write(f'{data},{hora},{cdi}\n')

        time.sleep(1)

    print("Taxa CDI capturada e salva com sucesso.")

# Função para gerar e salvar o gráfico
def gerar_grafico(nome_grafico='grafico_taxa_cdi'):
    df = pd.read_csv('./taxa-cdi.csv')

    grafico = sns.lineplot(x=df['hora'], y=df['taxa'])
    grafico.set_xticklabels(labels=df['hora'], rotation=90)

    plt.tight_layout()  # Ajusta o layout para evitar cortes nos rótulos
    plt.savefig(f"{nome_grafico}.png")
    print(f"Gráfico salvo como {nome_grafico}.png")

# Função principal para automatizar as tarefas
def main():
    print("Iniciando extração da taxa CDI...")
    extrair_e_salvar_taxa_cdi()

    print("Gerando gráfico...")
    gerar_grafico()

    print("Tarefas concluídas com sucesso.")

if __name__ == "__main__":
    main()
