using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public class ExerciseGroupsContext : DbContext
    {
        public ExerciseGroupsContext(DbContextOptions<ExerciseGroupsContext> options) : base(options)
        {
        }
        public DbSet<ExerciseGroups> ExerciseGroups { get; set; }
        public DbSet<ExerciseSets> ExerciseSets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ExerciseSets>()
                .HasOne(sets => sets.Group)
                .WithMany(groups => groups.Sets)
                .HasForeignKey(sets => sets.GroupId)
                .IsRequired();
        }
    }
}
