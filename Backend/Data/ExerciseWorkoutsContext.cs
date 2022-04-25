using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public class ExerciseWorkoutsContext : DbContext
    {
        public ExerciseWorkoutsContext(DbContextOptions<ExerciseWorkoutsContext> options) : base(options)
        {
        }
        public DbSet<ExerciseWorkouts> ExerciseWorkouts { get; set; }
        public DbSet<ExerciseGroups> ExerciseGroups { get; set; }
        public DbSet<ExerciseSets> ExerciseSets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ExerciseGroups>()
                .HasOne(groups => groups.Workout)
                .WithMany(workout => workout.Groups)
                .HasForeignKey(group => group.WorkoutId)
                .IsRequired();

            modelBuilder.Entity<ExerciseSets>()
                .HasOne(sets => sets.Group)
                .WithMany(groups => groups.Sets)
                .HasForeignKey(sets => sets.GroupId)
                .IsRequired();
        }
    }
}
