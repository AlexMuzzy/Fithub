using Microsoft.EntityFrameworkCore;
using Backend.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddDbContext<ExerciseWorkoutsContext>(options => {
    options.UseNpgsql(builder.Configuration.GetConnectionString("localEnvironment"))
    .UseSnakeCaseNamingConvention();
});

builder.Services.AddDbContext<ExerciseGroupsContext>(options => {
    options.UseNpgsql(builder.Configuration.GetConnectionString("localEnvironment"))
    .UseSnakeCaseNamingConvention();
});

builder.Services.AddDbContext<ExerciseSetsContext>(options => {
    options.UseNpgsql(builder.Configuration.GetConnectionString("localEnvironment"))
    .UseSnakeCaseNamingConvention();
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(c =>
    {
        c.RouteTemplate = "api/fithub/{documentname}/swagger.json";
    });

    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/api/fithub/v1/swagger.json", "Fithub Uber Cool API V1");
        c.RoutePrefix = "api/fithub";
    });

    app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
