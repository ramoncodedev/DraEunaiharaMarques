# Dra. Eunaihara Marques — Site institucional

Site estático (HTML, CSS e JavaScript puros, sem build) da psicóloga clínica e neuropsicóloga Eunaihara Marques (CRP 21/05234).

## Estrutura

```
.
├── index.html            # página única
├── css/
│   └── style.css         # estilos (variáveis de cor no :root)
├── js/
│   └── main.js           # animações ao rolar + correção de palavras órfãs
├── assets/
│   ├── img/              # imagens usadas no site
│   │   ├── banner.webp       # hero
│   │   └── foto-sobre.jpg    # seção "Olá, eu sou a Eunaihara"
│   └── originais/        # arquivos originais em alta (não vão para o Git)
├── .gitignore
└── README.md
```

## Rodar localmente

Abra o `index.html` no navegador, ou sirva a pasta:

```bash
npx serve .
```

## Publicar

Site estático: na Vercel (ou Netlify / GitHub Pages) basta importar o repositório. Sem comando de build, o diretório de saída é a raiz (`.`).

## Pendências de conteúdo

- Confirmar cidade/endereço do Medical Centro Clínico (telefones com DDD 86) e, se houver, o link do Google Maps.
- Se tiver a foto em tamanho maior, substituir `assets/img/foto-sobre.jpg` (a atual tem 470 px de largura).
