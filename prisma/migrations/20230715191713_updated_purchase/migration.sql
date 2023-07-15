/*
  Warnings:

  - The primary key for the `purchases` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__PurchaseProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PurchaseProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PurchaseProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "purchases" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__PurchaseProduct" ("A", "B") SELECT "A", "B" FROM "_PurchaseProduct";
DROP TABLE "_PurchaseProduct";
ALTER TABLE "new__PurchaseProduct" RENAME TO "_PurchaseProduct";
CREATE UNIQUE INDEX "_PurchaseProduct_AB_unique" ON "_PurchaseProduct"("A", "B");
CREATE INDEX "_PurchaseProduct_B_index" ON "_PurchaseProduct"("B");
CREATE TABLE "new_purchases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "totalAmount" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "purchases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_purchases" ("createdAt", "id", "totalAmount", "userId") SELECT "createdAt", "id", "totalAmount", "userId" FROM "purchases";
DROP TABLE "purchases";
ALTER TABLE "new_purchases" RENAME TO "purchases";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
