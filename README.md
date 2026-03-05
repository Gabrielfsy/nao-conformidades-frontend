# Plataforma de Cursos (MVP)

Protótipo inicial de uma plataforma de cursos com foco em gestão de catálogo.

## O que já existe

- Cadastro de **vários cursos** diretamente pela interface.
- Definição por curso de:
  - método de avaliação (quiz, projeto, prova, etc.)
  - sequência da matéria (linear, trilha flexível, pré-requisitos)
- Lista dinâmica com total de cursos cadastrados.

## Como rodar

Como é um projeto estático, basta abrir o `index.html` no navegador.

Se preferir servidor local:

```bash
python3 -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Próximos passos sugeridos

1. Persistir os cursos em banco de dados.
2. Área do instrutor com edição/exclusão de cursos.
3. Configurar rubricas de avaliação por módulo.
4. Motor de progressão com desbloqueio automático por regra.
