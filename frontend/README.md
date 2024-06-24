# MY FRONTEND TEMPLATE

확장성이 높고 개발자 간 컨벤션을 맞추기 용이한 템플릿을 제작 중입니다.

기능 분할 설계에 대하여:<br>
https://emewjin.github.io/feature-sliced-design/

원문:<br>
https://dev.to/m_midas/feature-sliced-design-the-best-frontend-architecture-4noj

의존성 설치<br>

> yarn

프로젝트 실행<br>

> yarn dev

빌드

> yarn build

## yarn 설치

> npm install --global yarn

버전 확인

> yarn --version

## APP base

VITE + react-ts

## ESLINT simple sort

VSCode의 extension에서 ESLint, Prettier - Code formatter 추가 권장합니다.

## tailwindcss

tailwindcss 공식 가이드 문서<br>
https://tailwindcss.com/docs/aspect-ratio

적용하려는 style을 페이지 내에서 `ctrl + f` 검색 후 적용

tailwindcss를 적용하는 이유(원문):<br>
https://adamwathan.me/css-utility-classes-and-separation-of-concerns/

**VS code extension 적용 권장 - Tailwind CSS InteilliSense**

예시:

```tsx
const BaseButton = (props: ButtonProps) => {
  const { text, small, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={classNames(buttonProps.className, "font-bold", {
        "w-[220px] h-[40px] text-[15px]": !small,
        "w-[104px] h-[32px] text-[13.5px]": small,
      })}
    >
      {text}
    </button>
  );
};
```

## Visual Studio Code User Snippet

경로

> File > Preferences > Configure User Snippets

typescript.json

```json
{
  // Place your snippets for typescript here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  // "Print to console": {
  // 	"prefix": "log",
  // 	"body": [
  // 		"console.log('$1');",
  // 		"$2"
  // 	],
  // 	"description": "Log output to console"
  // }
  "Functional Component Props Type": {
    "prefix": "tsfct",
    "body": ["type ${TM_DIRECTORY/^.+[\\/\\\\]+(.*)$/$1/}Props = {}", ""],
    "description": "Functional Component"
  }
}
```

typescriptreact.json

```json
{
  // Place your snippets for typescriptreact here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  // "Print to console": {
  // 	"prefix": "log",
  // 	"body": [
  // 		"console.log('$1');",
  // 		"$2"
  // 	],
  // 	"description": "Log output to console"
  // }
  "Get Directory": {
    "prefix": "getdir",
    "body": ["${TM_DIRECTORY/^.+[\\/\\\\]+(.*)$/$1/}"]
  },
  "Functional Component": {
    "prefix": "tsfc",
    "body": [
      "import React from 'react'",
      "",
      "export const ${TM_DIRECTORY/^.+[\\/\\\\]+(.*)$/$1/} = (props: ${TM_DIRECTORY/^.+[\\/\\\\]+(.*)$/$1/}Props) => {",
      "\tconst {} = props;",
      "",
      "\treturn <div></div>;",
      "}",
      ""
    ],
    "description": "Functional Component"
  },
  "Functional Component without Props": {
    "prefix": "tsfcp",
    "body": [
      "import React from 'react'",
      "",
      "export const ${TM_DIRECTORY/^.+[\\/\\\\]+(.*)$/$1/} = () => {",
      "\treturn <div></div>;",
      "}",
      ""
    ],
    "description": "Functional Component"
  },
  "Functional Component Props with Children": {
    "prefix": "tsfcpp",
    "body": [
      "import { PropsWithChildren } from 'react';",
      "",
      "export const ${TM_DIRECTORY/^.+[\\/\\\\]+(.*)$/$1/} = (props: PropsWithChildren) => {",
      "\treturn <div></div>;",
      "}",
      ""
    ],
    "description": "Functional Component"
  }
}
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
