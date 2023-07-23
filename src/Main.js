import { Box, Button, CssBaseline, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import KeyIcon from "@mui/icons-material/Key";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const Main = ({ isLaptop }) => {
    const [inputValue, setInputValue] = useState();
    const [result, setResult] = useState("");

    const [customMessageForType, setCustomMessageForType] = useState("");
    const [customMessageForLength, setCustomMessageForLength] = useState("");

    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleTypeAlertClose = () => {
        // Clear the custom message when the Alert is closed
        setCustomMessageForType("");
        // setCustomMessageForLength("");
    };
    const handleLengthAlertClose = () => {
        // Clear the custom message when the Alert is closed
        // setCustomMessageForType("");
        setCustomMessageForLength("");
    };

    const handleSuccessAlertClose = () => {
        setSuccessMessage("");
    };

    const copyResult = () => {
        navigator.clipboard.writeText(result);
    };

    const textFieldRef = useRef(null);

    const generatePassword = () => {
        if (isNaN(Number(inputValue))) {
            setCustomMessageForType("Please Enter A Number");
            textFieldRef.current.value = "";
        } else {
            if (inputValue > 61) {
                setCustomMessageForLength(
                    "Please Enter a Length Smaller than 61"
                );
                textFieldRef.current.value = "";
            } else {
                if (textFieldRef.current) {
                    const allChars =
                        "qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()[]{}?><,.`~-_=+";

                    const splitChars = allChars.split("");

                    const copySplitChars = [...splitChars];

                    var i, j, tmp;
                    for (i = copySplitChars.length - 1; i > 0; i--) {
                        j = Math.floor(Math.random() * (i + 1));
                        tmp = copySplitChars[i];
                        copySplitChars[i] = copySplitChars[j];
                        copySplitChars[j] = tmp;
                    }

                    const shuffledChars = copySplitChars;
                    const generatedPasswordAsArray = shuffledChars.slice(
                        0,
                        Number(inputValue)
                    );
                    const generatedPasswordAsString =
                        generatedPasswordAsArray.join("");
                    setResult(generatedPasswordAsString);
                    setSuccessMessage(
                        "A custom random password has been generated with The requested number of characters. To Generate a different password with the same number of charcters please press 'Generate' again"
                    );

                    textFieldRef.current.value = generatedPasswordAsString;
                }
            }
        }
    };

    return (
        <>
            {customMessageForType && (
                <Alert severity="error" onClose={handleTypeAlertClose}>
                    {customMessageForType}
                </Alert>
            )}
            {customMessageForLength && (
                <Alert severity="error" onClose={handleLengthAlertClose}>
                    {customMessageForLength}
                </Alert>
            )}
            {successMessage && (
                <Alert severity="success" onClose={handleSuccessAlertClose}>
                    {successMessage}
                </Alert>
            )}
            <CssBaseline />
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        width: isLaptop ? "60%" : "100%",
                        height: isLaptop ? "40%" : "100%",
                        bgcolor: "grey",
                        borderRadius: 3,
                        boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
                        padding: "25px",
                    }}
                >
                    <Box
                        className="TitleBox"
                        sx={{
                            // alignItems: "center",
                            // alignContent: "center",
                            justifyContent: "center",
                            display: "flex",
                            flexDirection: "row",
                            // bgcolor: "red",
                        }}
                    >
                        <Typography variant="h3" className="Title">
                            Password Generator{" "}
                            <KeyIcon
                                sx={{ fontSize: 100 }}
                                style={{ verticalAlign: "middle" }}
                            />
                        </Typography>
                    </Box>

                    <Box
                        className="Controls"
                        // spacing={2}
                        sx={{
                            display: "flex",
                            // flexDirection: "row",

                            flexDirection: isLaptop ? "row" : "column",
                            justifyContent: isLaptop ? "space-evenly" : "",
                            alignItems: !isLaptop ? "center" : "",
                            // alignItems: "center",
                            width: "100%",
                            height: "20%",
                            // bgcolor: "green",
                            // paddingTop: "50px",
                            // marginTop: "50px",
                            // marginBottom: "50px",
                        }}
                    >
                        <TextField
                            className="charInput"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="How Many Characters?"
                            sx={{
                                border: "1px solid black",
                                borderRadius: "5px",
                                margin: "0px",
                                fontSize: "16px",
                                backgroundColor: "white",
                                width: isLaptop ? "40%" : "80%",
                                height: "100%",
                            }}
                        />

                        <Button
                            className="generateBtn"
                            variant="filled"
                            sx={{
                                bgcolor: "#00AEFF",
                                width: isLaptop ? "40%" : "80%",
                                height: "100%",
                                "&:hover": { backgroundColor: "#00AEFF" },
                                // paddingTop: "50px",
                                marginTop: isLaptop ? "0px" : "20px",
                                // marginBottom: "50px",
                            }}
                            onClick={generatePassword}
                        >
                            <Typography
                                variant="button"
                                sx={{ textTransform: "none" }}
                            >
                                Generate
                            </Typography>
                        </Button>
                    </Box>

                    {/* <Box
                        sx={{
                            bgcolor: "blue",
                        }}
                    ></Box> */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "row",
                            // bgcolor: "red",
                        }}
                    >
                        <TextField
                            className="result"
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            sx={{
                                width: "95%",
                                "& input": {
                                    paddingLeft: "4vw", // Add the desired offset (adjust as needed)
                                },
                            }}
                            inputProps={
                                {
                                    // min: 0,
                                    // style: { textAlign: "center" },
                                }
                            }
                            placeholder=""
                            onChange={(event) =>
                                setInputValue(event.target.value)
                            }
                            inputRef={textFieldRef}
                        />
                        <Button onClick={copyResult}>
                            <ContentCopyIcon />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
