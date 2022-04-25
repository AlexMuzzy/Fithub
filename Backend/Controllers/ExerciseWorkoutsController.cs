#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Microsoft.Extensions.Logging;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExerciseWorkoutsController : ControllerBase
    {
        private readonly ExerciseWorkoutsContext _context;

        public ExerciseWorkoutsController(ExerciseWorkoutsContext context)
        {
            _context = context;
        }

        // GET: api/ExerciseWorkouts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExerciseWorkouts>>> GetExerciseWorkouts()
        {
            Console.WriteLine("Received GET Request for Exercise Workouts.");

            var workouts = _context.ExerciseWorkouts
                .Include(workouts => workouts.Groups)
                    .ThenInclude(groups => groups.Sets);
           

            var task = workouts.ToListAsync();
            return Ok(await task);
        }

        // GET: api/ExerciseWorkouts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExerciseWorkouts>> GetExerciseWorkouts(int id)
        {
            var exerciseWorkouts = await _context.ExerciseWorkouts.FindAsync(id);

            if (exerciseWorkouts == null)
            {
                return NotFound();
            }

            return exerciseWorkouts;
        }

        // PUT: api/ExerciseWorkouts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExerciseWorkouts(int id, ExerciseWorkouts exerciseWorkouts)
        {
            if (id != exerciseWorkouts.WorkoutId)
            {
                return BadRequest();
            }

            _context.Entry(exerciseWorkouts).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExerciseWorkoutsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ExerciseWorkouts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ExerciseWorkouts>> PostExerciseWorkouts(ExerciseWorkouts exerciseWorkouts)
        {
            _context.ExerciseWorkouts.Add(exerciseWorkouts);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExerciseWorkouts", new { id = exerciseWorkouts.WorkoutId }, exerciseWorkouts);
        }

        // DELETE: api/ExerciseWorkouts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExerciseWorkouts(int id)
        {
            var exerciseWorkouts = await _context.ExerciseWorkouts.FindAsync(id);
            if (exerciseWorkouts == null)
            {
                return NotFound();
            }

            _context.ExerciseWorkouts.Remove(exerciseWorkouts);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExerciseWorkoutsExists(int id)
        {
            return _context.ExerciseWorkouts.Any(e => e.WorkoutId == id);
        }
    }
}
