﻿// <auto-generated />
using System;
using IPS.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace IPS.Migrations
{
    [DbContext(typeof(MainDbContext))]
    [Migration("20211125070202_First")]
    partial class First
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("IPS.Models.DataModels.Presentation", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Presentations");
                });

            modelBuilder.Entity("IPS.Models.DataModels.PresentationObject", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Height")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("PositionX")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("PositionY")
                        .HasColumnType("decimal(18,2)");

                    b.Property<long?>("SlideId")
                        .HasColumnType("bigint");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.Property<decimal>("Weight")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.HasIndex("SlideId");

                    b.ToTable("PresentationObject");

                    b.HasDiscriminator<string>("Discriminator").HasValue("PresentationObject");
                });

            modelBuilder.Entity("IPS.Models.DataModels.Slide", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .UseIdentityColumn();

                    b.Property<long?>("PresentationId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("PresentationId");

                    b.ToTable("Slide");
                });

            modelBuilder.Entity("IPS.Models.DataModels.UserModel", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordSalt")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("IPS.Models.DataModels.PictureObject", b =>
                {
                    b.HasBaseType("IPS.Models.DataModels.PresentationObject");

                    b.Property<int>("Capacity")
                        .HasColumnType("int");

                    b.Property<string>("Content")
                        .HasColumnType("nvarchar(max)");

                    b.HasDiscriminator().HasValue("PictureObject");
                });

            modelBuilder.Entity("IPS.Models.DataModels.TextBoxObject", b =>
                {
                    b.HasBaseType("IPS.Models.DataModels.PresentationObject");

                    b.Property<string>("Font")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Text")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TextHeight")
                        .HasColumnType("int");

                    b.HasDiscriminator().HasValue("TextBoxObject");
                });

            modelBuilder.Entity("IPS.Models.DataModels.PresentationObject", b =>
                {
                    b.HasOne("IPS.Models.DataModels.Slide", null)
                        .WithMany("Objects")
                        .HasForeignKey("SlideId");
                });

            modelBuilder.Entity("IPS.Models.DataModels.Slide", b =>
                {
                    b.HasOne("IPS.Models.DataModels.Presentation", null)
                        .WithMany("Slides")
                        .HasForeignKey("PresentationId");
                });

            modelBuilder.Entity("IPS.Models.DataModels.Presentation", b =>
                {
                    b.Navigation("Slides");
                });

            modelBuilder.Entity("IPS.Models.DataModels.Slide", b =>
                {
                    b.Navigation("Objects");
                });
#pragma warning restore 612, 618
        }
    }
}