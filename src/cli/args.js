const parseArgs = () => {
    const args = process.argv;
    let result = [];
    for (let i = 2; i < args.length; i += 2) {
        const propName = args[i].slice(2);
        const value = args[i + 1];
        result.push(`${propName} is ${value}`)
    }
    console.log(result.join(', '))
};

parseArgs();
