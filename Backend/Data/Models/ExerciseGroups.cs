using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    public class ExerciseGroups
    {
        [Key]
        public int GroupId { get; set; }
        public string Name { get; set; }
        public int WorkoutId { get; set; }
        [JsonIgnore]
        public ExerciseWorkouts Workout { get; set; }
        [Required]
        public List<ExerciseSets> Sets { get; set; }
    }
}
