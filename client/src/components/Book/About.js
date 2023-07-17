import React from "react";
import Header from "../Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <div>
      <Header />
      <Box
        component="img"
        sx={{
          height: 800,
          width: 1745,
          maxHeight: { xs: 300, md: 300 },
          maxWidth: { xs: 500, md: 2500 },
        }}
        alt="All the Types of Book Genres, Explained."
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-sENlWI0at7xLivNMG-mJ1jDU-YFd4sgnw&usqp=CAU"
      />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2" gutterBottom>
          This is a BookStore Application
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ fontFamily: "fantasy" }}>
          By Melpomeni and Ameneh
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontFamily: "sans-serif" }}>
          Some people like to read on a screen. Other people need the variety
          and artistry, the sight, smell, and feel of actual books.They love
          seeing them on their shelves; they love having shelves for them. They
          love taking them along when they leave the house, and stacking them by
          their bedsides. They love finding old letters and bookmarks in them.
          They like remembering where they bought them or who they received them
          from. They want to read in a way that offers a rich experience, more
          than the words only: the full offering of a book. They are particular
          about covers, they want to surround themselves with the poetry of good
          design. They can't pass a bookstore without going in and getting
          something, they keep a library card and use it. They are allergic to
          cheap bestsellers; they delight in the out-of-the-way and the rare,
          the well-made and the hard-to-accomplish. They take care of their
          books; they know a book is only theirs until it passes on to someone
          else. They are good stewards of a timeless object.
          <br></br>
          These are the people we're working for
        </Typography>
      </Box>
    </div>
  );
}

export default About;
