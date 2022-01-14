# Tiago-Borges
Web scraping, banco de dados web e integração API
Interface web Front Conforme Anexo a imagem em servidor web com user e senha para acesso.
Mapear Categorias do site www.comprasparaguai.com.br
Ao adicionar uma categoria do site um codigo inserido Manualmente NCM na tela.
Então da-se inicio a raspagem dos dados para preencher banco de dados web conforme planilha:
https://docs.google.com/spreadsheets/d/1ieHloTqO5eErMu7BTAVO9dK4lnWL1PuW/edit?usp=sharing&ouid=100982748757646538441&rtpof=true&sd=true

Isso vai gerar um banco de dados onde será necessário ter alguns recursos na interface web tais como Imagem exemplo em anexo.
*Verificar o estoque e preco no site automaticamente e atualizar o banco de dados e API toda madrugada.
*Criar um calculo sob o preço do produto + lucro + impostos para gerar o preço final do produto no banco de dados.
*De tempo em tempo farei uma captura nova, pois o site está sempre atualizando produtos ( comparar os produtos já capturados com os novos para nao duplicar )
*Inativar e zerar estoque ao capturar produtos fora de estoque.
*função exportar dados para planilha em excell.
*Auxiliar de validacoes dos campos do banco de dados faltantes.
Esse banco de dados vai integrar com a API.
Preciso deixar código aberto e documentado para possíveis manutenção futuras por outros profissionais.
API DOCUMENTAÇÂO: https://app.swaggerhub.com/apis-docs/commerceplus6/commerceplus/1.0.0#
