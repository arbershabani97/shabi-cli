const useStateAndOrEffect = (useState, useEffect) => {
	if (!useState && !useEffect) return "";
	if (useState && !useEffect) return `, {useState}`;
	if (!useState && useEffect) return `, {useEffect}`;
	return `, {useEffect, useState}`;
};

const useStateString = (val) => {
	if (!val) return "";
	return `
    const [value, setValue] = useState("");
`;
};

const useEffectString = (val) => {
	if (!val) return "";
	return `
    useEffect(() => {
            
    }, []);
`;
};

module.exports = {useStateAndOrEffect, useStateString, useEffectString};
