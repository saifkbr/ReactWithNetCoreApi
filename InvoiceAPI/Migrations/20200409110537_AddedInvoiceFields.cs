using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InvoiceAPI.Migrations
{
    public partial class AddedInvoiceFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "InvoiceAmount",
                table: "Invoice",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<DateTime>(
                name: "InvoiceDate",
                table: "Invoice",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<double>(
                name: "PaymentAmount",
                table: "Invoice",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<DateTime>(
                name: "PaymentDate",
                table: "Invoice",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<double>(
                name: "Unit",
                table: "Invoice",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "InvoiceAmount",
                table: "Invoice");

            migrationBuilder.DropColumn(
                name: "InvoiceDate",
                table: "Invoice");

            migrationBuilder.DropColumn(
                name: "PaymentAmount",
                table: "Invoice");

            migrationBuilder.DropColumn(
                name: "PaymentDate",
                table: "Invoice");

            migrationBuilder.DropColumn(
                name: "Unit",
                table: "Invoice");
        }
    }
}
