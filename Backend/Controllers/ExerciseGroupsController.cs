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
    public class ExerciseGroupsController : ControllerBase
    {
        private readonly ExerciseGroupsContext _context;

        public ExerciseGroupsController(ExerciseGroupsContext context)
        {
            _context = context;
        }

        // GET: api/ExerciseGroups
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExerciseGroups>>> GetExerciseGroups()
        {
            return await _context.ExerciseGroups.ToListAsync();
        }

        // GET: api/ExerciseGroups/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExerciseGroups>> GetExerciseGroups(int id)
        {
            var exerciseGroups = await _context.ExerciseGroups.FindAsync(id);

            if (exerciseGroups == null)
            {
                return NotFound();
            }

            return exerciseGroups;
        }

        // PUT: api/ExerciseGroups/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExerciseGroups(int id, ExerciseGroups exerciseGroups)
        {
            if (id != exerciseGroups.GroupId)
            {
                return BadRequest();
            }

            _context.Entry(exerciseGroups).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExerciseGroupsExists(id))
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

        // POST: api/ExerciseGroups
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ExerciseGroups>> PostExerciseGroups(ExerciseGroups exerciseGroups)
        {
            _context.ExerciseGroups.Add(exerciseGroups);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExerciseGroups", new { id = exerciseGroups.GroupId }, exerciseGroups);
        }

        // DELETE: api/ExerciseGroups/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExerciseGroups(int id)
        {
            var exerciseGroups = await _context.ExerciseGroups.FindAsync(id);
            if (exerciseGroups == null)
            {
                return NotFound();
            }

            _context.ExerciseGroups.Remove(exerciseGroups);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExerciseGroupsExists(int id)
        {
            return _context.ExerciseGroups.Any(e => e.GroupId == id);
        }
    }
}
