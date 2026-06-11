---
id: "compound-components-para-layouts-consistentes"
title: "usar compound components para crear layouts mas consistentes"
author: Jesus Gutierrez
img: /error-types-forms.webp
description: "Cómo evitar errores de tipo al trabajar con formularios usando mapped types"
date: 20260522T000000-0400
---

si estas aqui yo se que has pasado por crear una vista para tu app, luego pasar por crear la segunda vista, luego una tercera y en ese momento piensas en que deberias crear algo como un componente layout, para no tener que recrear cada vista a mano desde cero.

quizas tambien has tenido que hacer componentes de ui como el header de tu layout o el footer y luego de crearlo te das cuenta de que no se adapta a tu segunda vista, por lo que tienes que rehacerlo adaptado ambos casos o pensar en pasarle configuraciones y props o condiciones para que haga una cosa u otra segun sean tus casos

pero cuando tienes multiples vistas, con multiples componentes a configurar, distintas configuraciones segun cada componente que vaya dentro de ese componente padre como el Layout, o si tienes un Header complejo, con multiples botones, layouts segun si es desktop o mobile, elementos condicionales que renderizan segun si el usuario tiene permisos o no

De solo pensar en cuántas props, condiciones y casos especiales tendrías que manejar según cada vista… da pereza.
Y en muchos casos terminas con un componente enorme, lleno de configuraciones, intentando resolver demasiados escenarios al mismo tiempo.

en el ir y venir de ideas y soluciones se nos ocurrio usar el patron compuesto, que sirve para entrelazar componentes entre si que comparten estado, contexto y logica, para darle mejor forma y estructura a esos componentes que le dan forma a las uis

el ejemplo mas usado para un patron compuesto es el elemento Select de html, 

```js
<Select>
	<SelectTrigger />													
	<SelectContent>
    		<SelectItem />
  	</SelectContent>
</Select>
```

En este patrón, cada parte del componente depende de una estructura específica para funcionar correctamente.
El SelectTrigger necesita existir dentro de Select, y los SelectItem deben vivir dentro de SelectContent.

y si pudieramos construir partes mas complejas de nuestro layout, como multiples partes entrelazadas entre si para tener mejor consistencia visual y estructural cada vez que se use

esto nos daria:
- modularidad
- legibilidad
- consistencia
- facilidad de adaptacion

la cuestion aqui seria comenzar a ver nuestros layouts como multiples partes pequeñas de un componente mas grande

<div class="flex gap-2 overflow-hidden max-md:flex-col-reverse md:gap-4">
<figure>
<picture>
  <img 
    class="mx-auto aspect-auto max-h-[580px] md:max-h-64 lg:max-h-96 xl:max-h-[360px]" 
    src='/Captureasdasd.jpg' 
    alt="error types en formularios de typescript" />
</picture>
<figCaption>ejemplo exagerado</figCaption>
</figure>
</div>

```js
const WorkspaceHeader = ({ children }) => {
	return (
		<header className="sticky top-0 shrink-0 border-b h-16 flex gap-4 items-center justify-between">
			<div className="flex items-center ">
				<SidebarTrigger className="size-8 p-1" />
				<Separator orientation="vertical" className="ml-3.5 h-8" />
			</div>
			<div className="flex flex-1 justify-between">{children}</div>
		</header>
	)
}

const Content = ({ title, description, Icon, children }) => {
	return (
		<div className="flex items-center gap-3">
			<div className="flex items-center justify-center size-9 rounded-lg bg-primary/30">
				<Icon className="size-5 text-primary" />
			</div>
			<div>
				<h1 className="text-lg font-semibold text-foreground">{title}</h1>
				<p className="text-xs text-muted-foreground hidden md:block">{description}</p>
			</div>
			{children && <div className="">{children}</div>}
		</div>
	)
}

const Actions = ({ children }) => {
	return <div className="flex items-center gap-3">{children}</div>
}

const SearchBar = ({ placeholder, value, onSearch }) => {
	return (
		<div className="relative">
			<Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
			<Input className="pl-9 w-48 bg-secondary/50" 
				placeholder={placeholder} 
				value={value} 
				onChange={(e) => onSearch(e.target.value)}
			/>
		</div>
	)
}

const Btn = ({ text, onClick }) => {
	return (
		<Button
			className="hover:bg-accent/20 px-1.5 md:px-4 gap-0 rounded-full md:rounded-sm"
			onClick={() => {
				onClick()
			}}
		>
			<Plus className="size-5" />
			<span className="hidden md:block">{text}</span>
		</Button>
	)
}


```

entonces, algo como esto:



```js
    <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-9 rounded-lg bg-primary/10">
                <LayoutGrid className="size-5 text-primary" />
            </div>
            <div>
                <h1 className="text-lg font-semibold text-foreground">Workspace</h1>
                <p className="text-xs text-muted-foreground">Organize your tasks, notes, and ideas</p>
            </div>
        </div>

        <div className="flex items-center gap-3">
            <div className="relative ">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                    placeholder="Search items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-64 bg-secondary/50"
                />
            </div>
            <Button onClick={() => setAddColumnDialogOpen(true)}>
                <Plus className="size-4 mr-1" />
                Add Column
            </Button>
        </div>
    </header>
```

puede empezar a verse de esta manera:

```js
    <WorkspaceHeader>
        <WorkspaceHeader.Content
            title='Workspace'
            description='Organize your tasks, notes, and ideas'
            Icon={LayoutGrid}
        />
        <WorkspaceHeader.Actions>
            <WorkspaceHeader.Search
                placeholder='Search Items'
                value={searchQuery}
                onSearch={setSearchQuery}
            />
            <WorkspaceHeader.Button
                text='Add Column'
                onClick={()=> setAddColumnDialogOpen}
            />
        </WorkspaceHeader.Actions>
    </WorkspaceHeader>
```

<div class="flex gap-2 overflow-hidden max-md:flex-col-reverse md:gap-4">
  <img 
    class="mx-auto aspect-auto max-h-[580px] md:max-h-64 lg:max-h-96 xl:max-h-[360px]" 
    src='/1Capture.jpg' 
    alt="error types en formularios de typescript" />
</div>

<div class="flex gap-2 overflow-hidden max-md:flex-col-reverse md:gap-4">
  <img 
    class="mx-auto aspect-auto max-h-[580px] md:max-h-64 lg:max-h-96 xl:max-h-[360px]" 
    src='/1-1Capture.jpg' 
    alt="error types en formularios de typescript" />
</div>

que seria lo interesante de esto? que no necesariamente tienes que ver o crear condiciones segun que elementos necesita tu componente en esa vista en especifica sino solamente usar el componente si es que la vista lo amerita. O crear espacios donde agregar elementos que son unicos y especificos para la misma, sin necesariamente tener que estar modificando todo el componente.



```js
const Actions = ({ children }) => {
	return <div className="flex items-center gap-3">{children}</div>
}

const Btn = ({ view, onClick, text, classname='' }) => {
	return (
		<button
			onClick={() => onClick()}
			className={cn(
				'px-3 py-1.5 text-sm rounded-md transition-colors',
				view === text 
                    ? 'bg-background text-foreground shadow-sm border border-accent/30' 
                    : 'text-muted-foreground hover:text-foreground',
				classname
			)}
		>
			{text}
		</button>
	)
}

<WorkspaceHeader>
    <WorkspaceHeader.Content 
        title="Calendar" 
        description="Schedule meetings and track deadlines" 
        Icon={CalendarDays} 
    />
    <WorkspaceHeader.Actions>
        <div className="flex items-center gap-3">
            <div className="flex items-center max-md:hidden bg-secondary/50 rounded-lg p-1">
                <Btn view={view} onClick={() => setView('month')} text="month" />
                <Btn classname="max-md:hidden" view={view} onClick={() => setView('week')} text="week" />
                <Btn view={view} onClick={() => setView('day')} text="day" />
            </div>
        </div>
        <WorkspaceHeader.Button
            text="Add Event"
            onClick={() => {
                setEditingEvent(undefined)
                setDialogOpen(true)
            }}
        />
    </WorkspaceHeader.Actions>
</WorkspaceHeader>
```

al ver, luego que los tabs se repetian en varias vistas e iban siendo inconsistentes por no ser un componente aislado se abstrajo en su modulo nuevamente para que pudieran ser reusados

```js
//workspaceHeader.jsx
const Tabs = ({ children }) => {
	return <div className="flex justify-center items-center gap-1 rounded-lg p-1 bg-border">{children}</div>
}
const Tab = ({ text, isActive, className, onClick }:) => {
	return (
		<button
			onClick={() => onClick()}
			className={cn(
				'px-3 py-1.5 text-sm rounded-md transition-colors border capitalize',
				isActive === text
					? 'bg-foreground/10 text-foreground shadow-sm border-accent/60'
					: 'text-muted-foreground hover:text-foreground border-transparent',
				className
			)}
		>
			{text}
		</button>
	)
}

//vistaY.jsx
<WorkspaceHeader.Actions>
    <WorkspaceHeader.Tabs>
        <WorkspaceHeader.Tab 
            text='month'
            onClick={()=>setView('month')}
            isActive={view}
        />
        <WorkspaceHeader.Tab 
            text='week'
            onClick={()=>setView('week')}
            className='max-md:hidden'
            isActive={view}
        />
        <WorkspaceHeader.Tab 
            text='day'
            onClick={()=>setView('day')}
            isActive={view}
        />
    </WorkspaceHeader.Tabs>
    <WorkspaceHeader.Button
        text="Add Event"
        onClick={() => {
            setEditingEvent(undefined)
            setDialogOpen(true)
        }}
    />
</WorkspaceHeader.Actions>
```
<div class="flex gap-2 overflow-hidden max-md:flex-col-reverse md:gap-4">
  <img 
    class="mx-auto aspect-auto max-h-[580px] md:max-h-64 lg:max-h-96 xl:max-h-[360px]" 
    src='/4Capture.jpg' 
    alt="error types en formularios de typescript" />
</div>

<div class="flex gap-2 overflow-hidden max-md:flex-col-reverse md:gap-4">
  <img 
    class="mx-auto aspect-auto max-h-[580px] md:max-h-64 lg:max-h-96 xl:max-h-[360px]" 
    src='/4-4Capture.jpg' 
    alt="error types en formularios de typescript" />
</div>

si una vista no tiene elementos que otras si, el componente no se declara

```js
//vistaX.jsx
<WorkspaceHeader>
    <WorkspaceHeader.Content
        title='Workspace'
        description='Organize your tasks, notes, and ideas'
        Icon={LayoutGrid}
    />
    <WorkspaceHeader.Actions>
        <WorkspaceHeader.Search
            placeholder='Search Items'
            value={searchQuery}
            onSearch={setSearchQuery}
        />
        <WorkspaceHeader.Button
            text='Add Column'
            onClick={()=> setAddColumnDialogOpen}
        />
    </WorkspaceHeader.Actions>
</WorkspaceHeader>

//vistaY.jsx
<WorkspaceHeader>
    <WorkspaceHeader.Content
        title='Documents Board'
        description='Add, create, edit your document templates'
        Icon={FileText}
    />
    <WorkspaceHeader.Actions>
        <WorkspaceHeader.Button
            text='Add Template'
            onClick={()=> console.log('asd')}
        />
    </WorkspaceHeader.Actions>
</WorkspaceHeader>
```
<div class="flex gap-2 overflow-hidden max-md:flex-col-reverse md:gap-4">
  <img 
    class="mx-auto aspect-auto max-h-[580px] md:max-h-64 lg:max-h-96 xl:max-h-[360px]" 
    src='/1-1Capture.jpg' 
    alt="error types en formularios de typescript" />
</div>

<div class="flex gap-2 overflow-hidden max-md:flex-col-reverse md:gap-4">
  <img 
    class="mx-auto aspect-auto max-h-[580px] md:max-h-64 lg:max-h-96 xl:max-h-[360px]" 
    src='/6-2Capture.jpg' 
    alt="error types en formularios de typescript" />
</div>

aun siendo el patron compuesto una estructura medio rigida, el que sea modular nos da la flexibilidad de decidir que elementos usar y cuales no, tambien dejandonos decidir como componerlos


```js
//vistaZ.jsx
<WorkspaceHeader>
    <WorkspaceHeader.Content 
        title="Time Tracker" 
        description={'log spent hours'} 
        Icon={Clock}
    >
        <WorkspaceHeader.Tabs>
            <WorkspaceHeader.Tab 
                text="day" 
                isActive={viewMode} 
                onClick={() => setViewMode('day')} 
            />
            <WorkspaceHeader.Tab 
                text="week" 
                isActive={viewMode} 
                onClick={() => setViewMode('week')} 
            />
        </WorkspaceHeader.Tabs>
    </WorkspaceHeader.Content>
    <WorkspaceHeader.Actions>
        <div className="flex items-center gap-2 bg-border px-3 py-1.5 rounded-lg">
            <Timer className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
                {viewMode === 'day' ? 'Today:' : 'This week:'}
            </span>
            <span className="font-semibold text-accent/40">
                {formatDuration(viewMode === 'day' ? todayTotalMinutes : weekTotalMinutes)}
            </span>
        </div>
        <WorkspaceHeader.Button 
            text="Add Entry" 
            onClick={() => handleAddEntry()} 
        />
    </WorkspaceHeader.Actions>
</WorkspaceHeader>
```

<div class="flex gap-2 overflow-hidden max-md:flex-col-reverse md:gap-4">
  <img 
    class="mx-auto aspect-auto max-h-[580px] md:max-h-64 lg:max-h-96 xl:max-h-[360px]" 
    src='/5Capture.jpg' 
    alt="error types en formularios de typescript" />
</div>

<div class="flex gap-2 overflow-hidden max-md:flex-col-reverse md:gap-4">
  <img 
    class="mx-auto aspect-auto max-h-[580px] md:max-h-64 lg:max-h-96 xl:max-h-[360px]" 
    src='/5-2Capture.jpg' 
    alt="error types en formularios de typescript" />
</div>

y asi puedes ir estructurando tus vistas como mejor convenga sin estar rompiendo las demas al mismo tiempo.

eso nos ahorra tiempo de desarrollo y los dolores de cabeza de tener que idear componentes o condiciones para uno o ambos escenarios, en el mejor de los casos.

en el peor de los casos, multiples escenarios al mismo tiempo que aumenta cuantos mas ejemplos, componentes y vistas tengas, cuando solo un componente es el responsable de manejar todos los casos.







