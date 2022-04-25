using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class ExerciseWorkouts
    {
        [Key]
        public int WorkoutId { get; set; }
        public string Name { get; set; }
        [Required]
        public List<ExerciseGroups> Groups { get; set; }
    }
}
