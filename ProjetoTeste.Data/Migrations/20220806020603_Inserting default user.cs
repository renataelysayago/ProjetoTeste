using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetoTeste.Data.Migrations
{
    public partial class Insertingdefaultuser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "Name" },
                values: new object[] { new Guid("18f0ad2d-e725-48f9-8020-d08f463bf5aa"), "userdefault@gmail.com", "User Default" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("18f0ad2d-e725-48f9-8020-d08f463bf5aa"));
        }
    }
}
