export function MealInfo({params}){
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
                Welcome to the meal info page! You are looking at meal with the slug: {params.slug}
            </h1>
        </main>
    );
}