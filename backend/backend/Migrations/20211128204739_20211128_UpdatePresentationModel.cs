using Microsoft.EntityFrameworkCore.Migrations;

namespace IPS.Migrations
{
    public partial class _20211128_UpdatePresentationModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageLink",
                table: "Presentations",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageLink",
                table: "Presentations");
        }
    }
}
