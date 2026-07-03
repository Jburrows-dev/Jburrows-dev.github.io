export type detail = {
    iconClass?: string,
    label: string,
    value: string
}

export type social = {
    id: string,
    svgPath: string
    url: string,
    label: string,
    hoverColor: string
}

export type about = {
    name: string,
    tagline: string,
    avatar: string,
    resume: string,
    details: Array<detail>,
    social: Array<social>
}

export type attribute = {
    icon: string,
    iconColor: string,
    title: string,
    description: string
}

export type experience = {
    company: string,
    role: string,
    location: string,
    period: string,
    current: boolean,
    description: string
}

type viewBox = {
    width: number,
    height: number
}

type chip = {
    svgPath: string,
    label: string,
    viewBox?: viewBox
}

export type skill = {
    groupIcon: string,
    group: string,
    chips: Array<chip>,
}

export type certification = {
    name: string,
    issuer: string,
    date: string
}

export type repo = {
    name: string,
    url: string,
    description: string,
    banner: string,
    color: string,
    lang: string,
    date: string,
    stars: number,
    forks: number
}

export type resume = {
    about: about,
    whatIDo: Array<attribute>,
    experience: Array<experience>,
    skills: Array<skill>,
    certifications: Array<certification>,
    repos: Array<repo>,
    contact: Array<social>
}