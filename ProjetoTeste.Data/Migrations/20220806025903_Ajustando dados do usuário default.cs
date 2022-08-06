using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetoTeste.Data.Migrations
{
    public partial class Ajustandodadosdousuáriodefault : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("18f0ad2d-e725-48f9-8020-d08f463bf5aa"),
                column: "DateCreated",
                value: new DateTime(2022, 2, 2, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("18f0ad2d-e725-48f9-8020-d08f463bf5aa"),
                column: "DateCreated",
                value: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
