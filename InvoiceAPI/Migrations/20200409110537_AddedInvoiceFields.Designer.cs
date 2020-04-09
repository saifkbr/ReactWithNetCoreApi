﻿// <auto-generated />
using System;
using InvoiceAPI.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace InvoiceAPI.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20200409110537_AddedInvoiceFields")]
    partial class AddedInvoiceFields
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3");

            modelBuilder.Entity("InvoiceAPI.Models.Invoice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("InvoiceAmount")
                        .HasColumnType("REAL");

                    b.Property<DateTime>("InvoiceDate")
                        .HasColumnType("TEXT");

                    b.Property<double>("PaymentAmount")
                        .HasColumnType("REAL");

                    b.Property<DateTime>("PaymentDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("Period")
                        .HasColumnType("TEXT");

                    b.Property<double>("Unit")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.ToTable("Invoice");
                });
#pragma warning restore 612, 618
        }
    }
}
