# backend-template-typescript

Web アプリケーションのバックエンド向けテンプレートリポジトリ。  
TypeScript で作成。

## データベース管理

ORM には、[Prisma](https://www.prisma.io/)を使用する。

以下に注意すること。※データが削除されることがある。

-   データベース構成の変更を`prisma/schema.prisma` 以外で行ってはいけない。
-   `prisma/migrations` 内はコマンドにより自動管理されるため、手動変更するものではない。

### マイグレーション手順

#### マイグレーションファイルの作成

1. `prisma/schema.prisma` に記載されているテーブル定義を変更する。

2. 以下コマンドを実行する。

    ```shell
    npm run sql-create
    ```

    ※ 実行中に`? Enter a name for the new migration: › ` と表示される。  
    『`xxxxx`』と入力すると、`prisma/migrations/YYYYMMDDhhmmss_xxxxx/migration.sql` が作成される。

#### マイグレーションファイルの実行

以下コマンドを実行する。

```shell
npm run sql-deploy
```
