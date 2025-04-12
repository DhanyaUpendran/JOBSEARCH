import Job from "../models/addjob.js";


// Fetch all job listings, with optional filtering by category and search term.
export const getJob = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};

    // Filter by category if provided and not "All"
    if (category && category !== 'All') {
      query.category = category;
    }

    // Apply search filter for title or company name (case-insensitive)
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    // Find jobs that match the constructed query
    const jobs = await Job.find(query);

    // Optional console log if no matching jobs found
    if (jobs.length === 0) {
      console.log('No matching jobs found for the given category or search.');
    }

    // Return matched jobs as JSON
    res.status(200).json(jobs);
  } catch (err) {
    // Handle any server errors
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
};

/**
 * POST /jobs
 * Create and save a new job post to the database
 */
export const AddJobs = async (req, res) => {
  const { title, company, category, location, description } = req.body;

  try {
    // Create a new Job document from the request body
    const newJob = new Job({ title, company, category, location, description });

    // Save the job to the database
    await newJob.save();

    // Respond with the newly created job
    res.status(201).json(newJob);
  } catch (err) {
    // Handle any server errors
    res.status(500).json({ message: 'Failed to post job' });
  }
};

/**
 * GET /categories
 * Returns a hardcoded list of job categories for use in dropdowns or filters
 */
export const getCategories = async (req, res) => {
  try {
    // Hardcoded list of categories (can be extended or fetched from DB in future)
    const allCategories = ["Design", "Development", "Marketing", "Finance", "Sales", "HR"];

    // Return category list as JSON
    res.json(allCategories);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ message: "Server Error" });
  }
};
