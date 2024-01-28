const parseEnv = () => {
    const envData = process.env;
    const RSSArray = Object.entries(envData).filter(([key])=>key.startsWith('RSS_'));
    const RSSString = RSSArray.map((el)=>`${el[0]}=${el[1]}`).join('; ')
    console.log(RSSString);
};

parseEnv();