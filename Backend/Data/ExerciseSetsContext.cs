using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public class ExerciseSetsContext : DbContext
    {
        public ExerciseSetsContext(DbContextOptions<ExerciseSetsContext> options) : base(options)
        {
        }
        public DbSet<ExerciseSets> ExerciseSets { get; set; }
    }
}
