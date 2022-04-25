#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace WorkoutsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExerciseSetsController : ControllerBase
    {
        private readonly ExerciseSetsContext _context;

        public ExerciseSetsController(ExerciseSetsContext context)
        {
            _context = context;
        }

        // GET: api/ExerciseSets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExerciseSets>>> GetExerciseSets()
        {
            return await _context.ExerciseSets.ToListAsync();
        }

        // GET: api/ExerciseSets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExerciseSets>> GetExerciseSets(int id)
        {
            var exerciseSets = await _context.ExerciseSets.FindAsync(id);

            if (exerciseSets == null)
            {
                return NotFound();
            }

            return exerciseSets;
        }

        // PUT: api/ExerciseSets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExerciseSets(int id, ExerciseSets exerciseSets)
        {
            if (id != exerciseSets.SetId)
            {
                return BadRequest();
            }

            _context.Entry(exerciseSets).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExerciseSetsExists(id))
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

        // POST: api/ExerciseSets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ExerciseSets>> PostExerciseSets(ExerciseSets exerciseSets)
        {
            _context.ExerciseSets.Add(exerciseSets);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExerciseSets", new { id = exerciseSets.SetId }, exerciseSets);
        }

        // DELETE: api/ExerciseSets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExerciseSets(int id)
        {
            var exerciseSets = await _context.ExerciseSets.FindAsync(id);
            if (exerciseSets == null)
            {
                return NotFound();
            }

            _context.ExerciseSets.Remove(exerciseSets);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExerciseSetsExists(int id)
        {
            return _context.ExerciseSets.Any(e => e.SetId == id);
        }
    }
}
