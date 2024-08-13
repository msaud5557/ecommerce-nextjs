import {
  Box,
  Container,
  Grid,
  Typography,
  Icon,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Link
} from "@mui/material";
import React from "react";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import img1 from "../imges/bgimageforsingleblog.png";
import vector from "../imges/Vector.png";
import calender from "../imges/uil_calendar-alt.png";
import img2 from "../imges/Group 140.png";
import img3 from "../imges/Group 92.png";
import img4 from "../imges/Rectangle 63.png";
import img5 from "../imges/Rectangle 63 (1).png";
import img6 from "../imges/Rectangle 63 (2).png";
import img7 from "../imges/Rectangle 63 (3).png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Paginationcomponent from "../paginationpage";
import person1 from "../imges/person1.png";
import person2 from "../imges/person2.png";
import BlogContact from "../blogcontact";
import { Search as SearchIcon } from "@mui/icons-material";
import pic1 from "../imges/Rectangle 126 (1).png";
import pic2 from "../imges/Rectangle 126 (2).png";
import pic3 from "../imges/Rectangle 126 (3).png";
import pic4 from "../imges/Rectangle 126 (4).png";
import pic5 from "../imges/Rectangle 126 (5).png";
import pic6 from "../imges/Rectangle 126 (6).png";
import pic7 from "../imges/Rectangle 126.png";
import pic8 from "../imges/Mask Group (1).png";
import pic9 from "../imges/Mask Group.png";
import pic10 from "../imges/Mask Group (2).png";

const Singleblog = () => {
  const tags = ["General", "Atsanil", "Insas", "Bibsaas", "Nulla"];
  return (
    <>
      <Container>
        <Grid
          container
          p={5}
          sx={{
           
          }}
        >
          <Grid
            item
            md={8}
            p={3}
            
          >
            <Box>
              <Box sx={{ height: "400px" }}>
                <Image src={img1} alt="Contact Image" layout="responsive" />
                <Box mt={2} sx={{  height: "40px" }}>
                  <Box
                    sx={{
                      width: "520px",
                      
                      height: "30px",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Box
                      sx={{
                        width: "20px",
                        height: "20px",
                        
                        marginTop: "3px"
                      }}
                    >
                      <Image
                        src={vector}
                        alt="Contact Image"
                        layout="responsive"
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "180px",
                        marginLeft: "15px",
                        
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FFE7F9"
                      }}
                    >
                      <Typography>Client Name</Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "20px",
                        height: "20px",
                        
                        marginTop: "3px",
                        marginLeft: "40px"
                      }}
                    >
                      <Image
                        src={calender}
                        alt="Contact Image"
                        layout="responsive"
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "180px",
                        marginLeft: "15px",
                        
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FFE7F9"
                      }}
                    >
                      <Typography>Client Name</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box mt={2} sx={{  fontSize: "bold" }}>
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet.
                </Typography>
              </Box>
              <Box mt={3}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, libero provident? Aut, nesciunt assumenda praesentium
                  labore voluptate reprehenderit! Adipisci cum, iusto odit
                  maiores praesentium odio quam dolorum numquam porro
                  voluptatibus, commodi illo dignissimos. Nesciunt minima
                  tenetur, numquam reiciendis amet, dolorum sapiente
                </Typography>
              </Box>
              <Box mt={5}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, libero provident? Aut, nesciunt assumenda praesentium
                  labore voluptate reprehenderit! Adipisci cum, iusto odit
                  maiores praesentium odio quam dolorum numquam porro
                  voluptatibus, commodi illo dignissimos. Nesciunt minima
                  tenetur, numquam reiciendis amet, dolorum sapiente maiores
                  praesentium odio quam dolorum numquam porro voluptatibus,
                  commodi illo dignissimos. Nesciunt minima tenetur, numquam
                  reiciendis amet, dolorum sapiente
                </Typography>
              </Box>

              <Box
                mt={5}
                p={2}
                sx={{
                  backgroundColor: "#FAFAFB",
                  borderLeft: "1px solid #FC45A0",
                  fontFamily: "sans-serif"
                }}
              >
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, libero provident? Aut, nesciunt assumenda praesentium
                  labore voluptate reprehenderit! Adipisci cum, iusto odit
                  maiores praesentium odio quam dolorum numquam porro
                  voluptatibus, commodi illo dignissimos. Nesciunt minima
                </Typography>
              </Box>

              <Box mt={5} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "320px",
                    height: "190px",
                    border: "1px solid red"
                  }}
                >
                  <Image src={img3} alt="Contact Image" layout="responsive" />
                </Box>
                <Box
                  sx={{
                    width: "320px",
                    height: "190px",
                    
                    marginLeft: "20px"
                  }}
                >
                  <Image src={img2} alt="Contact Image" layout="responsive" />
                </Box>
              </Box>
              <Box mt={5}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, libero provident? Aut, nesciunt assumenda praesentium
                  labore voluptate reprehenderit! Adipisci cum, iusto odit
                  maiores praesentium odio quam dolorum numquam porro
                  voluptatibus, commodi illo dignissimos. Nesciunt minima
                  tenetur, numquam reiciendis amet, dolorum sapiente maiores
                  praesentium odio quam dolorum numquam porro voluptatibus,
                  commodi illo dignissimos. Nesciunt minima tenetur, numquam
                  reiciendis amet, dolorum sapiente
                </Typography>
              </Box>

              <Box mt={5}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={3}
                    sx={{  height: "300px" }}
                  >
                    <Box
                      sx={{
                        height: "185px",
                        
                      }}
                    >
                      <Image
                        src={img4}
                        alt="Contact Image"
                        layout="responsive"
                      />
                    </Box>
                    <Box mt={1} ml={1}>
                      <Typography variant="h5">Card Title</Typography>
                    </Box>
                    <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ fontSize: "10px", marginLeft: "2px" }}>
                        $28.00{" "}
                      </Typography>
                      <Typography
                        ml={1}
                        sx={{
                          fontSize: "10px",
                          textDecoration: "line-through"
                        }}
                      >
                        $7.00
                      </Typography>
                      <Box ml={2} sx={{ display: "flex" }}>
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            sx={{
                              color: "yellow",
                              fontSize: "12px",
                              marginLeft: index !== 0 ? "2px" : "0"
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={3}
                    sx={{  height: "300px" }}
                  >
                    <Box
                      sx={{
                        height: "185px",
                       
                      }}
                    >
                      <Image
                        src={img5}
                        alt="Contact Image"
                        layout="responsive"
                      />
                    </Box>
                    <Box mt={1} ml={1}>
                      <Typography variant="h5">Card Title</Typography>
                    </Box>
                    <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ fontSize: "10px", marginLeft: "2px" }}>
                        $28.00{" "}
                      </Typography>
                      <Typography
                        ml={1}
                        sx={{
                          fontSize: "10px",
                          textDecoration: "line-through"
                        }}
                      >
                        $7.00
                      </Typography>
                      <Box ml={2} sx={{ display: "flex" }}>
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            sx={{
                              color: "yellow",
                              fontSize: "12px",
                              marginLeft: index !== 0 ? "2px" : "0"
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={3}
                    sx={{  height: "300px" }}
                  >
                    <Box
                      sx={{
                        height: "185px",
                        
                      }}
                    >
                      <Image
                        src={img6}
                        alt="Contact Image"
                        layout="responsive"
                      />
                    </Box>
                    <Box mt={1} ml={1}>
                      <Typography variant="h5">Card Title</Typography>
                    </Box>
                    <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ fontSize: "10px", marginLeft: "2px" }}>
                        $28.00{" "}
                      </Typography>
                      <Typography
                        ml={1}
                        sx={{
                          fontSize: "10px",
                          textDecoration: "line-through"
                        }}
                      >
                        $7.00
                      </Typography>
                      <Box ml={2} sx={{ display: "flex" }}>
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            sx={{
                              color: "yellow",
                              fontSize: "12px",
                              marginLeft: index !== 0 ? "2px" : "0"
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={3}
                    sx={{  height: "300px" }}
                  >
                    <Box
                      sx={{
                        height: "185px",
                       
                      }}
                    >
                      <Image
                        src={img7}
                        alt="Contact Image"
                        layout="responsive"
                      />
                    </Box>
                    <Box mt={1} ml={1}>
                      <Typography variant="h5">Card Title</Typography>
                    </Box>
                    <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ fontSize: "10px", marginLeft: "2px" }}>
                        $28.00{" "}
                      </Typography>
                      <Typography
                        ml={1}
                        sx={{
                          fontSize: "10px",
                          textDecoration: "line-through"
                        }}
                      >
                        $7.00
                      </Typography>
                      <Box ml={2} sx={{ display: "flex" }}>
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            sx={{
                              color: "yellow",
                              fontSize: "12px",
                              marginLeft: index !== 0 ? "2px" : "0"
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box mt={5}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, libero provident? Aut, nesciunt assumenda praesentium
                  labore voluptate reprehenderit! Adipisci cum, iusto odit
                  maiores praesentium odio quam dolorum numquam porro
                  voluptatibus, commodi illo dignissimos. Nesciunt minima
                  tenetur, numquam reiciendis amet, dolorum sapiente maiores
                  praesentium odio quam dolorum numquam porro voluptatibus,
                  commodi illo dignissimos. Nesciunt minima tenetur, numquam
                  reiciendis amet, dolorum sapiente
                </Typography>
              </Box>

              <Box mt={5}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, libero provident? Aut, nesciunt assumenda praesentium
                  labore voluptate reprehenderit! Adipisci cum, iusto odit
                  maiores praesentium odio quam dolorum numquam porro
                  voluptatibus, commodi illo dignissimos. Nesciunt minima
                  tenetur, numquam reiciendis amet, dolorum sapiente maiores
                  praesentium odio quam dolorum numquam porro voluptatibus,
                  commodi illo dignissimos. Nesciunt minima tenetur, numquam
                  reiciendis amet, dolorum sapiente
                </Typography>
              </Box>

              <Box
                p={5}
                sx={{
                  marginTop: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center"
                }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#5625DF",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <FacebookIcon />
                </Box>
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#FF27B7",
                    marginLeft: "10px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <InstagramIcon />
                </Box>
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#37DAF3",
                    marginLeft: "10px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TwitterIcon />
                </Box>
              </Box>
              <Paginationcomponent />

              <Box
                mt={5}
                p={3}
                sx={{
                  height: "150px",
                  backgroundColor: "gray",
                  border: "1px solid red",
                  display: "flex",
                  flexDirection: "row", 
                  alignItems: "center" 
                }}
              >
                <Box
                  sx={{
                    
                    width: "150px",
                    height: "92px",
                    marginRight: "10px"
                  }}
                >
                  <Image
                    src={person1}
                    s
                    alt="Contact Image"
                    layout="responsive"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column", 
                    justifyContent: "center"
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "row", mb: 1 }}>
                    <Typography variant="h5">Dummy Name</Typography>
                    <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                      Date
                    </Typography>
                  </Box>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci expedita a aliquid perspiciatis reiciendis
                    cupiditate!
                  </Typography>
                </Box>
              </Box>

              <Box
                mt={5}
                p={3}
                sx={{
                  height: "150px",
                  backgroundColor: "gray",
                  
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Box
                  sx={{
                   
                    width: "150px",
                    height: "92px",
                    marginRight: "10px",
                    position: "relative"
                  }}
                >
                  <Image
                    src={person2}
                    alt="Contact Image"
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: "0px" }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "row", mb: 1 }}>
                    <Typography variant="h5">Dummy Name</Typography>
                    <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                      Date
                    </Typography>
                  </Box>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci expedita a aliquid perspiciatis reiciendis
                    cupiditate!
                  </Typography>
                </Box>
              </Box>

              <BlogContact />
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            
          >
            <Box sx={{ padding: 4 }}>
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Search
              </Typography>
              <TextField
                fullWidth
                placeholder="Search for posts"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                sx={{ marginBottom: 4 }}
              />

              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Categories
              </Typography>
              <Grid container spacing={2} sx={{ marginBottom: 4 }}>
                {["Hobbies", "Women", "Women", "Women", "Women", "Women"].map(
                  (category, index) => (
                    <Grid item xs={6} key={index}>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          backgroundColor: "white",
                          color: "black",
                          "&:hover": {
                            backgroundColor: "#F939BF",
                            color: "white"
                          }
                        }}
                      >
                        {category}
                      </Button>
                    </Grid>
                  )
                )}
              </Grid>

              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Recent Post
              </Typography>
              <Grid container spacing={2}>
                {[
                  "It is a long established fact",
                  "It is a long established fact",
                  "It is a long established fact",
                  "It is a long established fact"
                ].map((post, index) => (
                  <Grid
                    item
                    xs={12}
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box
                      component="img"
                      src={`https://via.placeholder.com/50`}
                      alt="Post Thumbnail"
                      sx={{ width: 50, height: 50, marginRight: 2 }}
                    />
                    <Box>
                      <Typography variant="body2">{post}</Typography>
                      <Typography variant="caption">Aug 09 2020</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
                Sale Product
              </Typography>
              <Grid container spacing={2}>
                {[
                  "Elit ornare in enim mauris.",
                  "Viverra pulvinar et enim.",
                  "Mattis varius donec fdsfd"
                ].map((product, index) => (
                  <Grid
                    item
                    xs={12}
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box
                      component="img"
                      src={`https://via.placeholder.com/50`}
                      alt="Product Thumbnail"
                      sx={{ width: 50, height: 50, marginRight: 2 }}
                    />
                    <Box>
                      <Typography variant="body2">{product}</Typography>
                      <Typography variant="caption">Aug 09 2020</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
                Offer Product
              </Typography>

              <Box
                sx={{
                  width: "250px",
                  height: "130px",
                 
                  display: "flex"
                }}
              >
                <Box
                  sx={{
                    width: "110px",
                    height: "130px",
                    
                  }}
                >
                  <Box
                    sx={{
                      width: "110px",
                      height: "80px",
                     
                      overflow: "hidden", 
                      display: "flex", 
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      src={pic10}
                      alt="Contact Image"
                      
                      style={{
                        objectFit: "cover", 
                        borderRadius: "0px"
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column"
                    }}
                  >
                    <Typography varient="h5">Offer Name</Typography>
                    <Typography sx={{ fontSize: "15px" }}>$12-$15</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "110px",
                    height: "130px",
                  
                    marginLeft: "20px"
                  }}
                >
                  <Box
                    sx={{
                      width: "110px",
                      height: "80px",
                      
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      src={pic8}
                      alt="Contact Image"
                      style={{
                        objectFit: "cover",
                        borderRadius: "0px"
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column"
                    }}
                  >
                    <Typography varient="h5">Offer Name</Typography>
                    <Typography sx={{ fontSize: "15px" }}>$12-$15</Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  width: "250px",
                  height: "130px",
                  
                  display: "flex",
                  marginTop: "30px"
                }}
              >
                <Box
                  sx={{
                    width: "110px",
                    height: "130px",
                  
                  }}
                >
                  <Box
                    sx={{
                      width: "110px",
                      height: "80px",
                      
                      overflow: "hidden", 
                      display: "flex", 
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      src={pic8}
                      alt="Contact Image"
                      
                      style={{
                        objectFit: "cover", 
                        borderRadius: "0px"
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column"
                    }}
                  >
                    <Typography varient="h5">Offer Name</Typography>
                    <Typography sx={{ fontSize: "15px" }}>$12-$15</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "110px",
                    height: "130px",
                    
                    marginLeft: "20px"
                  }}
                >
                  <Box
                    sx={{
                      width: "110px",
                      height: "80px",
                      
                      overflow: "hidden", 
                      display: "flex", 
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      src={pic9}
                      alt="Contact Image"
                      style={{
                        objectFit: "cover",
                        borderRadius: "0px"
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column"
                    }}
                  >
                    <Typography varient="h5">Offer Name</Typography>
                    <Typography sx={{ fontSize: "15px" }}>$12-$15</Typography>
                  </Box>
                </Box>
              </Box>

              <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
                Follow
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  width: "200px",
                  height: "100px",
                  
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center"
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#5625DF",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <FacebookIcon />
                  </Box>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#FF27B7",
                      marginLeft: "10px",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <InstagramIcon />
                  </Box>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#37DAF3",
                      marginLeft: "10px",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <TwitterIcon />
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
                  Tags
                </Typography>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  gap={2}
                >
                  {tags.map((tag, index) => (
                    <Link
                      key={index}
                      href="#"
                      underline="hover" 
                      sx={{
                        display: "block",
                        width: "calc(33.33% - 16px)", 
                        textAlign: "center",
                        marginBottom: 2 
                      }}
                    >
                      {tag}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Singleblog;
