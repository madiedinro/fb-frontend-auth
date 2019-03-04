export const ShowIf = (props: any) => {
    return !props.condition
        ? null
        : typeof props.children === 'function' ? props.children : props.children[0];
};