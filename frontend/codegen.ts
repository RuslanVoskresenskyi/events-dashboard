import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:8000/graphql',
  documents: ['src/**/*.ts', 'src/**/*.tsx'],
  generates: {
    './src/api/generated.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
}

export default config