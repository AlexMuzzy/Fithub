using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    public class ExerciseSets
    {
        [Key]
        public int SetId { get; set; }
        public int Weight { get; set; }
        public int Reps { get; set; }
        public int GroupId { get; set; }
        [JsonIgnore]
        public ExerciseGroups Group { get; set; }
    }
}
