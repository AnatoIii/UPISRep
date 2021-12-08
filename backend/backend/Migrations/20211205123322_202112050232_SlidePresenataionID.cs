using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IPS.Migrations
{
    public partial class _202112050232_SlidePresenataionID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Slide_Presentations_PresentationId",
                table: "Slide");

            migrationBuilder.AlterColumn<long>(
                name: "PresentationId",
                table: "Slide",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "GuidLinks",
                columns: table => new
                {
                    GUID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CreationDateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuidLinks", x => x.GUID);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Slide_Presentations_PresentationId",
                table: "Slide",
                column: "PresentationId",
                principalTable: "Presentations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Slide_Presentations_PresentationId",
                table: "Slide");

            migrationBuilder.DropTable(
                name: "GuidLinks");

            migrationBuilder.AlterColumn<long>(
                name: "PresentationId",
                table: "Slide",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AddForeignKey(
                name: "FK_Slide_Presentations_PresentationId",
                table: "Slide",
                column: "PresentationId",
                principalTable: "Presentations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
